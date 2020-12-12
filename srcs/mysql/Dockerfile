FROM alpine:3

RUN apk add --no-cache mysql mysql-client
RUN mysql_install_db --user=mysql --datadir=/var/lib/mysql
COPY ./init.sql /tmp/
COPY ./wordpress.sql /tmp/
RUN ash -c "mysqld_safe &" && sleep 10 && \
	mysql < /tmp/init.sql && \
	mysql --database=wordpress < /tmp/wordpress.sql && \
	mysql -e "FLUSH PRIVILEGES;SHUTDOWN;" && \
	wait
COPY mariadb-server.cnf /etc/my.cnf.d/mariadb-server.cnf
RUN mv /var/lib/mysql /var/lib/mysql.init
RUN mkdir /var/lib/mysql
RUN chown -R mysql /var/lib/mysql /var/lib/mysql.init

COPY init.sh /

USER mysql
VOLUME /var/lib/mysql
EXPOSE 3306
CMD /init.sh
