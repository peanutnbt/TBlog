#!/bin/bash

# This script is used to stop application
cd /var/www/html/ideaexchange
pm2 stop server/bin/www || true