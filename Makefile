.PHONY: build

serve:
	./node_modules/http-server/bin/http-server ./build

build:
	# Build steps
	@./node_modules/.bin/gulp

deploy:
	git add -A build
	git commit -m 'commiting new build'
	@git push origin :gh-pages || echo 'failed to delete gh-pages branch. Does it exist?'
	git subtree push --prefix build origin gh-pages
	git reset HEAD^