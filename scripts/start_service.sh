#!/bin/bash
cd /var/www/server/service
if [ -d "node_modules" ]; then
  sudo rm -r node_modules
fi
mdrm=$?
sudo npm install pm2 -g
fi=$?
sudo npm install
sudo npm run pm2