#!/bin/sh

[ "$(ls -A /var/lib/mysql/)" ] || cp -R /var/lib/mysql.init/* /var/lib/mysql/

mysqld
