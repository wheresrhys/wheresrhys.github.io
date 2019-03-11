---
template: post.html
title: Past-proofing npm modules written in ES6
description: A solution to publishing ES6 modules for seamless use in ES5 environments
date: 2014-04-07
---
I recently converted [fetch-mock](https://www.npmjs.com/package/fetch-mock) (a mocking library for [fetch](https://github.com/whatwg/fetch)) to ES6. As I mostly use it for testing server side code that uses [isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch) I didn't realise there was a problem when using it in the browser.

I was careful to use only those bits of ES6 supported in nodejs 4, so babel is not required on the server side. However it is required to run the tests in most browsers (notably PhantomJS). Babel's default behaviour is to not process any files within `node_modules`, so even though my tests of fetch-mock were working, when it was actually installed and used in another project it would [throw syntax errors](https://github.com/wheresrhys/fetch-mock/issues/21).

This has been 'solved' in other modules by compiling with babel as [part of the build](http://www.hammerlab.org/2015/07/09/bundling-and-distributing-complex-es6-libraries-in-an-es5-world/) and including this file in the npm package e.g. [fetchres](https://www.npmjs.com/package/fetchres). But this
is unsatisfactory for a number of reasons, [outlined well in this article](https://mattandre.ws/2015/07/writing-npm-modules-es6-run-es5/), to which I would also add that it doesn't necessarily generate good sourcemaps and that it's more confusing to dive into the package's code to investigate bugs (as we node developers love to do - hurrah for run-time compilation).

So I didn't want to do that. This *was* going to be a post triumphantly declaring I'd found a neater solution, but I ran into a few potholes. So below is an oh-so-plausible solution to the problem, followed by the, hopefully interesting, reasons it doesn't work.

## The solution

>`babel-core` provides a method for transpiling code on demand; By calling `require('babel-core/register')()` on the first line of your code all subsequent requires will be transpiled to ES5... with the exception of anything required, either [explicitly or implicitly](https://nodejs.org/api/modules.html#modules_loading_from_node_modules_folders), from your `node_modules` directory. This default behaviour can be overridden, but I don't expect users of fetch-mock to tinker with it, nor do I have any desire to document what the correct configuration should be. But by wrapping fetch-mock's src in a file which itself calls `babel-core/register` I can configure it myself, scoped to my module

>```
require('babel-core/register')({
    only: /fetch-mock/
});
module.exports = require('./src/fetch-mock');
```

>This solution avoids all the problems inherent with publishing transpiled code in packages. With npm 3, which we'll all hopefully be using soon, there wouldn't be a great installation overhead in lots of packages declaring `babel-core` as a dependency either. 

## ... and why it's no solution at all

### babel-core/register only has global config
Any calls of the method [extend its global config](https://github.com/babel/babel/blob/master/packages/babel-register/src/node.js#L143) which means, particularly when npm3 and its more rigorous attempts at a flatter dependency tree comes along, that a module cannot reliably control babel's behaviour in a limited scope. There *may* be technical limitations which mean there's no way around this, but if not then changing the behaviour would be a step closer to emabling on-demand transpiling of dependencies.

### 
### Limited applicability
It would only apply to a relatively small subset of modules (isomorphic, es5... but if babelify was more intelligent...)


