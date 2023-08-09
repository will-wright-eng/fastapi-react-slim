#!/bin/bash

# Exit in case of error
set -e

if [ ! -d ./fastapi-react-slim ] ; then
    echo "Run this script from outside the project, to generate a sibling dev project"
    exit 1
fi

rm -rf ./dev-fastapi-react-slim

python -m cookiecutter --no-input -f ./fastapi-react-slim project_slug="dev-fastapi-react-slim"