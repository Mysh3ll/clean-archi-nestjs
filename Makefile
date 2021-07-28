.PHONY: up install test-all build

CONTAINER_NAME = api

up:
	@docker-compose up -d

stop:
	@docker-compose down

no-cache:
	@docker-compose build --no-cache

install: up
	@docker-compose exec $(CONTAINER_NAME) npm install $(ARGS) || $(MAKE) stop
	${MAKE} stop

prebuild: up
	@docker-compose exec $(CONTAINER_NAME) npm run prebuild || $(MAKE) stop
	${MAKE} stop

build: up
	@docker-compose exec $(CONTAINER_NAME) npm run build || $(MAKE) stop
	${MAKE} stop

format: up
	@docker-compose exec $(CONTAINER_NAME) npm run format || $(MAKE) stop
	${MAKE} stop

start: up
	@docker-compose exec $(CONTAINER_NAME) npm start $(ARGS) || $(MAKE) stop
	${MAKE} stop

start-dev: up
	@docker-compose exec $(CONTAINER_NAME) npm run start:dev || $(MAKE) stop
	$(MAKE) stop

start-debug: up
	@docker-compose exec $(CONTAINER_NAME) npm run start:debug || $(MAKE) stop
	$(MAKE) stop

start-prod: up
	@docker-compose exec $(CONTAINER_NAME) npm run start:prod || $(MAKE) stop
	$(MAKE) stop

lint: up
	@docker-compose exec $(CONTAINER_NAME) npm run lint || $(MAKE) stop
	${MAKE} stop

test: up
	@docker-compose exec $(CONTAINER_NAME) npm run test || $(MAKE) stop
	${MAKE} stop

test-watch: up
	@docker-compose exec $(CONTAINER_NAME) npm run test:watch || $(MAKE) stop
	$(MAKE) stop

test-cov: up
	@docker-compose exec $(CONTAINER_NAME) npm run test:cov || $(MAKE) stop
	$(MAKE) stop

test-debug: up
	@docker-compose exec $(CONTAINER_NAME) npm run test:debug || $(MAKE) stop
	$(MAKE) stop

test-e2e: up
	@docker-compose exec $(CONTAINER_NAME) npm run test:e2e || $(MAKE) stop
	$(MAKE) stop


