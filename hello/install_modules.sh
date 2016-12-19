#!/usr/bin/env bash

modules=`sed -n -e '/id/s/^.*"id": //p' plugins/fetch.json | sed -e 's/"//g'`
echo $modules
for m in $modules; do
	echo $m
	cordova plugin add "$m"
done
