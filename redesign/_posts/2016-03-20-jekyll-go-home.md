---
layout: post
title: Jekyll go home
description: How to use your favourite non-jekyll static site generator with github pages
hashtags: #github #staticsitegenerators #nodejs #git
date: 2016-03-20
---

This is the second time I've written a blog post about the stack I use to power this blog. This time I'm going one further because this blog post is about the code changes contained in the pull request which also adds this text to the site. 

A while ago I wrote about migrating the site [from jekyll, ruby and github pages to node, metalsmith and heroku](http://www.wheresrhys.co.uk/2014/a-new-stack-or-many-hippo-returns/). I was very happy to ditch Jekyll as I'm not a fan, and ruby too as I don't know ruby. At the time I was also happy to move to heroku as it felt hip and sophisticated. Now I'm a little more experienced with deployment and hosting solutions I've realised that heroku isn't the best fit for my little site. Mainly it's because to get 100% up time I'd have to pay, but it also introduces dependencies and complexity into my deployment.

After watching Phil Hawksworth's [excellent talk on static site hosting](https://vimeo.com/145138875) I decided I should try something more tailor made for static sites, and gave netlify a go. Only after investing a fair bit of time into setting it up did I realise they inject a 'powered by netlify' pop up. Sure, I've been able to add a script to suppress this, but it's hardly honourable behaviour, and this was still added complexity I didn't need. I was starting to miss github pages. If only there was a way to use github pages without reverting to Jekyll as my static site generator.

Well there is, and the surprising hero is `git`. I can't claim to be the [originator of the idea](https://gist.github.com/cobyism/4730490), but I have refined it and boiled it down to the following shell commands which leave your master branch uncluttered with additional commits and built files. I have them available as `make deploy`, but it should be possible to adapt them for use in any build scripts you have. An [npm package](https://www.npmjs.com/package/gh-pages) also exists to do this and more, but I'm drawn to the simplicity and speed of the shell.

    # Add the directory that contains your built static site (which you can also safely put in youor .gitignore)
    git add -Af build-directory-name
    
    # Create a temporary commit so git knows about the files
    git commit -m 'commiting new build'
    
    # Try to delete the content of the gh-pages branch - not essential, but it will avoid potential git conflicts which will cause the deployment to fail
    git push origin :gh-pages || echo 'Failed to delete gh-pages branch. Does it exist?'
    
    # Push the build directory to the root of the gh-pages branch
    git subtree push --prefix build-directory-name origin gh-pages
    
    # Revert the last commit
    git reset HEAD^
    

The above can easily be adapted to work for your my-user-name.github.io site by never working in master (I've set the default branch for wheresrhys.github.io to be `_master`) and pushing a subtree up to `master` instead of `gh-pages`.

