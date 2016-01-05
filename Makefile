.PHONY: build

serve:
	./node_modules/http-server/bin/http-server ./build

build:
	# Build steps
	@./node_modules/.bin/gulp

deploy:
	netlify deploy -s astrologer-goat-57534 -p build
