FROM alpine:3

RUN apk add --no-cache influxdb 

RUN ash -c "influxd -config /etc/influxdb.conf &" && sleep 5 && \
	influx \
		-host "127.0.0.1" \
		-execute "CREATE DATABASE grafana WITH DURATION 60d;" && \
	killall influxd && \
	wait

COPY processes.sh /

EXPOSE 8086
VOLUME /var/lib/influxdb/
CMD /processes.sh 
