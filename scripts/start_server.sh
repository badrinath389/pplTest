#!/bin/bash
cd /var/sampleApi

sudo npm run pm2stop

sudo npm run build

sudo npm run pm2start