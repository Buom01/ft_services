FROM alpine:3

RUN apk add --no-cache libc6-compat

RUN wget https://dl.influxdata.com/telegraf/releases/telegraf-1.16.3_linux_amd64.tar.gz \
		-O /tmp/telegraf.tar.gz && \
	tar xf /tmp/telegraf.tar.gz && \
	cp -R telegraf-1.16.3/* / && \
	rm -R telegraf-1.16.3 /tmp/telegraf.tar.gz
COPY telegraf.conf /etc/telegraf/telegraf.conf

CMD ["telegraf", "--config", "/etc/telegraf/telegraf.conf"]

