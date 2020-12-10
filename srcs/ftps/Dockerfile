FROM alpine:3

RUN apk add --no-cache vsftpd
RUN mkdir -p /var/ftp

COPY vsftpd.conf /etc/vsftpd/vsftpd.conf
COPY buom01.key /etc/ssl/private/buom01.key
COPY buom01.crt /etc/ssl/certs/buom01.crt

RUN echo "root:changed_password_42" | chpasswd

VOLUME /var/ftp
EXPOSE 21 
CMD ["vsftpd", "/etc/vsftpd/vsftpd.conf"]
