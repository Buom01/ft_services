FROM alpine:3

RUN apk add --no-cache nginx php7 php7-fpm php7-mysqli php7-json php7-opcache

RUN mkdir -p /etc/nginx /run/nginx /var/www
RUN rm -rf /var/www/*
COPY nginx.conf /etc/nginx/nginx.conf
COPY wordpress/ /var/www/

COPY processes.sh /

EXPOSE 5050
CMD /processes.sh 
