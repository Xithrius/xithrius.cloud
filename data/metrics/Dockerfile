FROM ubuntu:20.04

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get -y update && apt-get -y install collectd

# add a fake mtab for host disk stats
COPY etc_mtab /etc/mtab
COPY collectd.conf.tpl /etc/collectd/collectd.conf.tpl
COPY docker-entrypoint.sh /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]
