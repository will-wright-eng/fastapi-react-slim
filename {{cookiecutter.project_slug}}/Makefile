#* Variables
SHELL := /usr/bin/env bash
PYTHON := python3.8
PYTHONPATH := `pwd`

#* Docker variables
IMAGE := tracking_ui
VERSION := latest

.PHONY: $(shell sed -n -e '/^$$/ { n ; /^[^ .\#][^ ]*:/ { s/:.*$$// ; p ; } ; }' $(MAKEFILE_LIST))

.DEFAULT_GOAL := help

help: ## list make commands
	@echo ${MAKEFILE_LIST}
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

init: ## init project
	brew install python@3.8
	docker-compose run --rm backend alembic upgrade head
	bash scripts/build.sh

up: ## start app (no daemon mode)
	docker-compose up --build --remove-orphans

open: ## open http://localhost:8000/
	open http://localhost:8000/

open-api: ## open http://localhost:8000/api/docs
	open http://localhost:8000/api/docs

poetry-set: ## updates lockfile, exports requirements.txt, and reinstalls
	poetry lock -n && poetry export --without-hashes > requirements.txt
	poetry install -n
	#poetry run mypy --install-types --non-interactive ./

docker-kill: ## kill all docker containers
	for id in $$(docker ps --format "{{.ID}}"); do docker kill $$id; done
