FROM alpine:3

RUN apk add --no-cache influxdb libc6-compat

RUN ash -c "influxd -config /etc/influxdb.conf &" && sleep 5 && \
	influx \
		-host "127.0.0.1" \
		-execute "CREATE DATABASE grafana WITH DURATION 60d;" && \
	killall influxd && \
	wait
RUN mv /var/lib/influxdb /var/lib/influxdb.init

COPY init.sh /

EXPOSE 8086
VOLUME /var/lib/influxdb/
CMD /init.sh 
