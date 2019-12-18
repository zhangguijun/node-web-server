#!bin/sh
cd /Users/zhanghao/Documents/study/node-web-server/blog1/logs
cp access.log $(date +%Y-%m-%d).access.log
echo "" > access.log