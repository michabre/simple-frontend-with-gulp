FROM redhat/ubi8

LABEL maintainer="michabre"

RUN yum update -y
RUN yum -y install httpd

COPY css /var/www/html/
COPY js /var/www/html/
COPY index.html /var/www/html/

ENTRYPOINT ["/usr/sbin/httpd", "-D", "FOREGROUND"]

EXPOSE 80