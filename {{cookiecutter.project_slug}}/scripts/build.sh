#!/bin/bash

# Exit in case of error
set -e

if [ -f example.env ]; then
    mv example.env .env
    echo "example.env file moved successfully."
else
    echo "example.env file does not exist."
fi

# Build and run containers
docker-compose up -d

# Hack to wait for postgres container to be up before running alembic migrations
sleep 5;

# Run migrations
docker-compose run --rm backend alembic upgrade head

# Create initial data
docker-compose run --rm backend python3 app/initial_data.py

sleep 5;
docker-compose logs -f
