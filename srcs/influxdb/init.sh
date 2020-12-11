#!/bin/sh

[ "$(ls -A /var/lib/influxdb/)" ] || cp -R /var/lib/influxdb.init/* /var/lib/influxdb/

/processes.sh
