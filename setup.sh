#!/bin/sh

cd $(dirname $0)

panic ()
{
	echo "Failed !"
	exit 1
}

docker_issue ()
{
	groups | grep docker && \
		echo "You already seem in the docker group. Try to reboot." || \
		echo "Missing Docker group detected !"
	echo "Adding $(whoami) to the docker group. You will need to authenticate."
	sudo usermod -aG docker $(whoami)
	echo "Using a trick to avoid to reboot"
	su - $(whoami) -c "$(pwd)/setup.sh"
	exit
}

calculate_ip ()
{
	export HOST_IP=$(minikube ip)
	if [ "$HOST_IP" = "127.0.0.1" ]
	then
		echo "\`$ minikube ip\` returned \`127.0.0.1\` ! See https://github.com/kubernetes/minikube/issues/7344"
		echo "Assuming you are using Ubuntu".
		IP_PREFIX="172.17.0"
		IP_BEGIN="2"
	else
		IP_PREFIX=$(echo $HOST_IP | sed -E 's/\.([0-9]+)$//')
		IP_BEGIN=$(echo $HOST_IP | sed -E 's/.*\.([0-9]+)$/\1 + 1/' | bc)
	fi
	export IP_LB=$IP_PREFIX.$IP_BEGIN
	export IP_RANGE=$IP_LB-$IP_PREFIX.255
}

build ()
{
	echo "### Building $1 ..."
	docker build srcs/$1 -t buom01/$1 || panic
	echo ""
}

echo "# Verifying environement..."

echo "## Detecting cores ..."
echo "CPU cores found: $(nproc)"
if [ $(nproc) -eq 1 ]
then
	echo "At least 2 cores are needed. Impossible to run."
	echo "Configure your VM and retry."
	exit
fi

echo ""
echo "## Testing Docker ..."
docker ps > /dev/null && echo "Docker is working" || docker_issue

echo ""
echo ""
echo "# Starting minikube ..."
minikube status > /dev/null \
	&& echo Reusing current instance. \
	|| minikube start \
		--driver docker \
	|| panic

calculate_ip
minikube addons enable metrics-server
minikube addons enable dashboard
minikube addons enable default-storageclass
minikube addons enable storage-provisioner

echo ""
echo "# Docker"

eval $(minikube -p minikube docker-env) 

echo "## Building containers ..."
build nginx # LoadBalancer
build wordpress # LoadBalancer
build phpmyadmin # LoadBalancer
build grafana # LoadBalancer
build ftps # LoadBalancer

build mysql # ClusterIP
build influxdb # ClusterIP
build telegraf # ClusterIP

echo ""
echo "# Kubernetes"

echo "## Testing Kubernetes ..."
kubectl cluster-info || panic
kubectl get nodes

echo ""
echo "## Resetting deployements ..."
kubectl delete --all deployments
kubectl delete --all services

echo ""
echo "## Installing MetalLB ..."
kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.9.3/manifests/namespace.yaml
kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.9.3/manifests/metallb.yaml
envsubst < srcs/metallb/config.yaml | kubectl apply -f - || panic
kubectl create secret generic -n metallb-system memberlist --from-literal=secretkey="$(openssl rand -base64 128)"

echo ""
echo "## Deploying containers ..."

envsubst < srcs/config.yaml | kubectl apply -f - || panic

echo ""
echo "## Setting Service Accounts for API access"

envsubst < srcs/service-accounts.yaml | kubectl apply -f - || panic

echo ""
echo "## Printing status"

kubectl get services
kubectl get deployments
kubectl get endpoints

echo ""
echo ""
echo "# Openning dashboard"

minikube dashboard || minikube dashboard || minikube dashboard || panic
