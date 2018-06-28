FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD 123
ENV MYSQL_DATABASE cars_db
ENV MYSQL_USER admin
ENV MYSQL_PASSWORD admin
ENV MYSQL_ROOT_HOST 172.18.0.1

ADD page_monitor_db.sql /docker-entrypoint-initdb.d