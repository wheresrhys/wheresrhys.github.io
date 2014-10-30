app := wheresrhys

deploy:
    # Build steps
    @./node_modules/.bin/gulp
    
    # Package+deploy
    @./node_modules/.bin/haikro build deploy \
        --app $(app) \
        --token $(heroku auth:token) \
        --commit `git rev-parse HEAD`