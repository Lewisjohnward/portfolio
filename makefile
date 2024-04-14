.PHONY: development
development:
	npm install
	docker compose -f build/development/docker-compose.yml up -d 


.PHONY: clean-development
clean-development:
	docker compose -f build/development/docker-compose.yml down
	docker image rmi portfolio-dev
	rm -rf node_modules

.PHONY: build-production
build-production:
	docker compose -f build/production/docker-compose.yml build
