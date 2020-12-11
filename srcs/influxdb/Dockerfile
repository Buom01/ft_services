FROM alpine:3

RUN apk add --no-cache influxdb libc6-compat

RUN ash -c "influxd -config /etc/influxdb.conf &" && sleep 5 && \
	influx \
		-host "127.0.0.1" \
		-execute "CREATE DATABASE grafana WITH DURATION 60d;" && \
	killall influxd && \
	wait
RUN wget https://dl.influxdata.com/telegraf/releases/telegraf-1.16.3_linux_amd64.tar.gz \
		-O /tmp/telegraf.tar.gz && \
	tar xf /tmp/telegraf.tar.gz && \
	cp -R telegraf-1.16.3/* / && \
	rm -R telegraf-1.16.3 /tmp/telegraf.tar.gz
COPY telegraf.conf /etc/telegraf/telegraf.conf

COPY processes.sh /

EXPOSE 8086
VOLUME /var/lib/influxdb/
CMD /processes.sh 
