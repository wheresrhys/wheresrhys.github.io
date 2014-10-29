---
template: post.html
title:  "A new stack (or, many hippo returns)"
draft: true
---

Missed me?

No, me neither, until the other day when I realised my losing a debit card on holiday had inadvertently stopped payments to my hosting company and downed this site, so I've been offline for a while. As you can see I'm back to normal... but a lot has changed under the hood. 

My blog used to be wordpress driven and resided for several years on a bog-standard LAMP hosting service. Then I relegated the blog to old.wheresrhys.co.uk and set up this one as a jekyll driven github pages site (using some hacky DNS settings to keep both sites under the wheresrhys domain). The death of my LAMP hosting and a quality I have which can best be described as lazy-sightedness* has pushed me to finally bring my hosting infrastructure in line with what I'm accustomed to at work; CI, deploy scripts, node servers and hurrah for heroku.

But there's an elephant in the room. I call that elephant 'Ruby'. Lots of people love Ruby, including the local Rhinoceros, 'Jekyll', but I really can't be bothered with her. I have a pet hippo called 'nodejs' I much prefer hanging out with, even though he and Jekyll don't get on very well. What to do??

A while back I looked for an alternative to Jekyll that ran on node. At the time it wasn't very fertile ground, but it's testament to the dynamism of the nodejs community that the number of options [has exploded](https://www.staticgen.com/). Reading through the options available now one of them really caught my eye: [Metalsmith](http://www.metalsmith.io/). I've recently worked a lot with express and gulp, and in Metalsmith there appeared to be a static site generator with a very similar pipe and middleware approach, less dependency ridden and more customisable than I'd imagined I'd find. Too good to be true? Was I getting rid of one elephant only to replace it with another, whiter one?


*always seeking the lazy option, but either not paying enough attention or lacking the insight to identify it