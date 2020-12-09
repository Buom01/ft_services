FROM alpine:3.12.0

RUN apk add --no-cache nginx
RUN mkdir /run/nginx

COPY nginx.conf /etc/nginx/nginx.conf
COPY buom01.key /etc/ssl/private/buom01.key
COPY buom01.crt /etc/ssl/certs/buom01.crt
COPY buom01_ftservices_docs/_site /var/www

EXPOSE 80
EXPOSE 443
CMD nginx
