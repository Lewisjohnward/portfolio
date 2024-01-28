dev:
	npm install && sudo docker compose up -d
remove:
	sudo docker compose down && rm -rf node_modules
