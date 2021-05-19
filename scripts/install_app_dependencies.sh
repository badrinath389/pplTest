#!/bin/bash
echo "Installing curl .."
sudo yum -y install curl
echo "Installing git"
sudo yum -y install git
echo "Updating node to v10.x"
sudo curl -sL https://rpm.nodesource.com/setup_14.x | bash -
sudo yum -y install nodejs
echo "Checking node version..."
node -v