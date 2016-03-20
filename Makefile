.PHONY: build

serve:
	./node_modules/http-server/bin/http-server ./build

build:
	# Build steps
	@./node_modules/.bin/gulp
	touch build/CNAME
	echo 'www.wheresrhys.co.uk' > build/CNAME

deploy:
	git add -Af build
	git commit -m 'commiting new build'
	@git push origin :master || echo 'failed to delete master branch. Does it exist?'
	git subtree push --prefix build origin master
	git reset HEAD^