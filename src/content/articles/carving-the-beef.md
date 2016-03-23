---
template: post.html
title:  Carving the beef
description: Applying cutting the mustard to your application structure
hashtags: #ctm #progressive-enhancement #webdev
draft: true
---

Cutting the mustard is an idea that has gained an awful lot of traction ever since the BBC article that coined the phrase, and concept, little more than a year ago. I'm not going to debate the merits of what is proving a very useful paradigm for reducing migraines in front-end developers - if you're not already a convert then don't read on. What I *do* want to explore is what some of the consequences of following through the idea to its logical conclusion could be, and why it might be a good idea to do so.

In a nutshell cutting the mustard means 3 things:

1. Delivering a robust, relatively simple core product that will work on pretty much every platform
1. Defining a minimal set of detectable features that a platform must support in order to run  an enhanced product
1. Delivering the enhanced product, which builds upon the features already delivered by the core product, only to those platforms that support those features

You may have noticed I didn't mention CSS or JavaScript at all, or that 'core' is CSS + HTML and 'enhanced' adds JavaScript. The above rules could equally well apply to the early days of the web, when core would've been vanilla HTML and enhanced would be HTML + CSS. At the opposite end of the scale, rules 2 & 3 could be applied over and over again to provide enhanced+, enhanced++, ... products. If we ignore the current implementation of cutting the mustard for CSS and JavaScript then it becomes an incredibly versatile idea that can both describe and enable progressive enhancement using *any* technologies. But does this have any implications for current web development? I think it does.

Now, to a history lesson.

For many years weba application structurea has been built around the needs of server side code. Be it a java, .Net or php project the norm has persistently been to find the client side code nested way down the directory tree at something like `./src/main/app/themes/main/views/`. If you were lucky all client side code would be in the same location, templates would be easy to find and work with and configuration and building of the front end would be (broadly speaking, mind) sane.

As the client side codebase has grown, even on relatively small projects, to include modular JavaScript and CSS (via preprocessors), this application structure has come to seem increasingly silly. Fortunately, through tools such as nodejs and express, and other less opinionated back-end frameworks, client side code need no longer be relagated to a second class citizen of the application; in the last few months everything I've worked on has had client-side code at the top level, and I don't anticipate ever again being expected to traverse needlessly long-winded paths to get to my source on a *serious* web project.

However, there is still one hangover from the bad old days; we're still in the habit of grouping our code by language. In bygone days this made sense - the only place that JS and CSS existed in an app was on the client side, so having a 'js' directory or a 'css' directory made some sort of sense and helped clearly label the contents of the code as front-ender territory. But nowadays it's not uncommon to see a node app with a 'src' directory, under which appear 'client' and 'node' subdirectories, CSS in another root level directory, images in another... It's a lazy habit of grouping resources by what they're made of instead of what they're meant for.

What if we used cutting the mustard to branch not just the final product delivered to the user, but also the source code it's built from. What would this look like, and would it bring any benefits?

In present day web applications this would mean splitting client side code into two top level directories*, 'core' and 'enhanced'. Within the core directory would sit most templates along with sass** which pertains to the core experience only and the 'cuts the mustard' test; any styles or templates needed by the enhanced js experience should not go in here. Then the enhanced directory would contain all javascript and additional templates and sass needed for the enhanced javascript experience.

It may seem nonsensical to split the sass files like this as, for performance reasons, you will probably end up compiling the sass into a single CSS file. But it does make it easier to maintain the core experience's integrity.



enhanced-



each

where to put templates

benefits
 - extensible to other experiences e.g. watches
 - easier to understand code's purpose
 - separation of concerns
 - when writing modules makes it easier to consume only what you really want
 - future proof

A specific difficulty that tends to accompany this is where to put templates




choice of progressive enhancements
 - app-like
 - web page + js

* or when using a modular structure, each moodule would have these subdirectories
** or LESS, CSS, Stylus