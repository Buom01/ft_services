FROM alpine:3.12.0

RUN apk add --no-cache mysql mysql-client
RUN mysql_install_db --user=mysql --datadir=/var/lib/mysql
COPY ./init.sql /tmp/
COPY ./wordpress.sql /tmp/
RUN ash -c "mysqld_safe &" && sleep 10 && \
	mysql < /tmp/init.sql && \
	mysql --database=wordpress < /tmp/wordpress.sql && \
	mysql -e "FLUSH PRIVILEGES;SHUTDOWN;"
COPY mariadb-server.cnf /etc/my.cnf.d/mariadb-server.cnf

USER mysql
VOLUME /var/lib/mysql
EXPOSE 3306
CMD ["mysqld"]
