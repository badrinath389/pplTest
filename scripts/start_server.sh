#!/bin/bash
cd /var/sample-ppl

npm install

npm run build

npm run pm2stop

npm run pm2start