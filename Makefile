app := wheresrhys
auth := $(shell (echo -n ":" ; heroku auth:token) | base64)
.PHONY: build

serve:
	./node_modules/http-server/bin/http-server ./build

build:
	# Build steps
	@./node_modules/.bin/gulp

deploy:
	# Package+deploy
	@./node_modules/.bin/haikro build deploy \
		--app $(app) \
		--token $(auth) \
		--commit `git rev-parse HEAD`
