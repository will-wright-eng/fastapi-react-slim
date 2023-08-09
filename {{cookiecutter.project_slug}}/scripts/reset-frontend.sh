#!/bin/bash

# Exit in case of error
set -e

if [ -d "frontend/node_modules" ]; then
    rm -rf frontend/node_modules/
    echo "frontend/node_modules removed"
else
    echo "frontend/node_modules does not exist"
fi

if [ -f "frontend/package-lock.json" ]; then
    rm -rf frontend/package-lock.json
    echo "frontend/package-lock.json removed"
else
    echo "frontend/package-lock.json does not exist"
fi
