dev:
	npm install && sudo docker compose up -d
remove:
	sudo docker compose down && sudo docker image rmi portfolio-dev && rm -rf node_modules
