#!/bin/bash
cd /app/bundle/programs/server/npm/node_modules/sharp
npm install
node /app/bundle/main.js
cd /app/bundle
for i in `seq 1 30`; do
  node main.js &&
  s=$$? && break || s=$$?;
  echo \"Tried $$i times. Waiting 5 secs...\";
  sleep 5;
done
