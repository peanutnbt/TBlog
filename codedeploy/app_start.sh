#!/bin/bash

# This script is used to start the application
cd /var/www/html/ideaexchange
pm2 start /var/www/html/ideaexchange/server/bin/www -n www -f
