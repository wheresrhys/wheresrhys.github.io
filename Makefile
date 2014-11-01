app := wheresrhys
auth := $(shell heroku auth:token)
.PHONY: build

build: 
	# Build steps
	@./node_modules/.bin/gulp

deploy:	
	# Package+deploy
	@./node_modules/.bin/haikro build deploy \
		--app $(app) \
		--token $(auth) \
		--commit `git rev-parse HEAD`
