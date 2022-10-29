.PHONY: reset-constants
.DEFAULT: help

help: ## Display this help message
	@echo "Please use \`make <target>\` where <target> is one of"
	@awk -F ':.*?## ' '/^[a-zA-Z]/ && NF==2 {printf "\033[36m  %-25s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

init: ## Install dependencies
	yarn
	make reset-constants

reset-constants: ## Reset constants values in config
	@cp src/config/.temp/* src/config

dev: ## Run local dev
	yarn start
