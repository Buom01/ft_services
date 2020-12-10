FROM alpine:3

RUN apk add --no-cache libc6-compat 

COPY grafana /grafana
RUN chmod +x /grafana/bin/grafana-server

COPY processes.sh /grafana

VOLUME /grafana/data
EXPOSE 3000
WORKDIR /grafana 
CMD ./processes.sh 
