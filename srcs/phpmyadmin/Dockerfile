FROM alpine:3.12.0

RUN apk add --no-cache nginx php7 php7-fpm php7-mysqli php7-json php7-opcache \
	php7-session php7-mbstring php7-zlib php7-gd php7-openssl php7-curl

RUN mkdir -p /etc/nginx /run/nginx /var/www
RUN rm -rf /var/www/*
COPY nginx.conf /etc/nginx/nginx.conf
COPY phpmyadmin/ /var/www/

COPY processes.sh /

EXPOSE 5000
CMD ["/processes.sh"] 
