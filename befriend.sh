#!/bin/bash

for i in {1..100}
do
	xdotool mousemove 86 138
	xdotool click 1
	sleep 5
	xdotool key F5	
	sleep 5
	xdotool key Return


done
