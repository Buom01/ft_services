SET PASSWORD FOR root@localhost = PASSWORD('changed_password_42');
CREATE USER 'wordpress'@'%' IDENTIFIED BY 'secret_password_42';
CREATE DATABASE wordpress;
GRANT ALL PRIVILEGES ON * . * TO 'wordpress'@'%';
