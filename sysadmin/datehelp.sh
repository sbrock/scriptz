#!/bin/bash
#source: http://redd.it/17ondq
for F in {a..z} {A..Z} :z ::z :::z
do
	echo $F: `date +%$F`
done | \
sed "/:[\ \t\n]*$/d;/%[a-zA-Z]/d"
