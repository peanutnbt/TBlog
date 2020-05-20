#!/bin/bash

# This script is executed before copying the source

#yum -y update

#curl --silent --location https://rpm.nodesource.com/setup_4.x | bash -
#curl -sL https://rpm.nodesource.com/setup_14.x | bash -
#yum -y install nodejs

#npm install -g pm2
#pm2 update

export app_root=/var/www/html/ideaexchange
if [ -d "$app_root" ];then
    rm -rf /var/www/html/ideaexchange
    mkdir -p /var/www/html/ideaexchange
else
    mkdir -p /var/www/html/ideaexchange
fi

