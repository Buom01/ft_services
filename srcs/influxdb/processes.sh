#!/bin/sh
c=$(printf '\033')
trap "echo Quitting container since a process were stopped. && exit" CHLD

function run()
{
	sh -c "$1 | sed \"s/^/$2/\"; echo \"$2'$1' just exits.\"; exit" &
}

# Process list and their prefix
run "influxd -config /etc/influxdb.conf" "[$c[1m$c[96mINFLUX DB$c[0m] "


wait
echo "'wait' finished its work !"
