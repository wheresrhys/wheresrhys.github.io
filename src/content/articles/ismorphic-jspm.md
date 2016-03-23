### Client-side script-loader: JSPM
This is purely because I wanted to try it out. No-one likes to wait for their client side code to rebuild before testing it in the browser. Even with hot-loading I find webpack to not be as instant as I'd like(And I can't stand webpack config), so JSPM's offer of loading scripts on demand without a build was very attractive. 

The results have been disappointing. Each page typically loads hundreds (thanks, NPM) of scripts in a waterfall which takes a similar amount of time to a webpack/browserify build. It's also still on babel 5, so I don't have the ability to fine tune the transforms that get applied. I'll probably switch back to webpack before long, but for the time being I'm sticking with JSPM as resources indicating how to use it as part of an isomorphic webapp are hard to come by (in fact, that would make a decent demo all by itself).

I only mention my choice of JSPM as it impacts on the next choice...