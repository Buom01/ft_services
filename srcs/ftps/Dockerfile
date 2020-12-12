FROM alpine:3

RUN apk add --no-cache vsftpd
RUN mkdir -p /var/ftp

COPY vsftpd.conf~ /etc/vsftpd/vsftpd.conf
COPY buom01.key /etc/ssl/private/buom01.key
COPY buom01.crt /etc/ssl/certs/buom01.crt

RUN echo "root:changed_password_42" | chpasswd

VOLUME /var/ftp
expose 20
expose 21
expose 10000
expose 10001
expose 10002
expose 10003
CMD ["vsftpd", "/etc/vsftpd/vsftpd.conf"]
