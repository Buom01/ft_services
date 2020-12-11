#!/bin/sh

panic ()
{
	echo "Failed !"
	exit 1
}

build ()
{
	echo "### Building $1 ..."
	docker build srcs/$1 -t buom01/$1 || panic
	echo ""
}

echo "# Starting minikube ..."
minikube status > /dev/null \
	&& echo Reusing current instance. \
	|| minikube start \
		--driver docker \
	|| panic

minikube addons enable dashboard
minikube addons enable default-storageclass
minikube addons enable storage-provisioner

echo "# Docker"

eval $(minikube -p minikube docker-env) 
echo "## Testing Docker ..."
docker info -f "Docker is ready" || panic

echo "## Building containers ..."
build nginx # LoadBalancer
build wordpress # LoadBalancer
build phpmyadmin # LoadBalancer
build grafana # LoadBalancer
build ftps # LoadBalancer

build mysql # ClusterIP
build influxdb # ClusterIP

echo "# Kubernetes"

echo "## Testing Kubernetes ..."
kubectl cluster-info || panic
kubectl get nodes

echo "## Resetting deployements ..."
kubectl delete --all deployments
kubectl delete --all services

if [ "$1" != "dev" ]
then
	echo "## Installing MetalLB ..."
	kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.9.3/manifests/namespace.yaml
	kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.9.3/manifests/metallb.yaml
	kubectl apply -f srcs/metallb/config.yaml
	kubectl create secret generic -n metallb-system memberlist --from-literal=secretkey="$(openssl rand -base64 128)"
fi

echo "## Deploying containers ..."

kubectl apply -f srcs/config.yaml || panic

echo "## Setting Service Accounts for API access"

kubectl apply -f srcs/service-accounts.yaml

echo "## Printing status"

kubectl get services
kubectl get deployments
kubectl get endpoints

if [ "$1" == "dev" ]
then
	echo "## Launching developpement LoadBalancer"
	minikube tunnel &
fi

minikube dashboard || minikube dashboard || minikube dashboard || panic
