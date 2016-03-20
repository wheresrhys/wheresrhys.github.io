---
template: post.html
title:  "One careful owner"
draft: true
---

A friend of mine, on recent completion of a half marathon, posted:

> Complete set of running gear for sale, large, almost new, low miles and only one knackered owner. Offers?

... which is pretty unrelated to the rest of this post, other than it reminded me to write something about the ownership of open source projects.

The very phrase 'open source' conjures up images of a utopia; a democratised software ecosystem, where the best ideas and code become widely adopted through a process not dissimilar to natural selection. Everything - including important decision making - is both shared with and owned by the community.

But of course the reality is far from that. For myriad reasons most code has one or more owners who get the final say on what changes are made, ranging from tiny bugfixes to decisions about the direction and scope of the project. For the most part this is of benefit to the community as it protects us from malicious or irresponsible 'contributions' to the codebase.

But it can sometimes become dysfunctional. If a package owner doesn't have the time or inclination to maintain it, then its presence in your dependency tree - particularly when it's a subdepency of one of your direct dependencies - can become irksome. The [github issue](https://github.com/eugeneware/debowerify/issues/29) that initially inspired this post is an excellent example. A [PR](https://github.com/substack/node-falafel/pull/24) to fix a problem that prevented `npm shrinkwrap` from being run was ignored for *a year and a half*. This despite it passing tests, being supported by a number of consumers of the package, and being owned by a prolific and highly-regarded member of the nodejs community. 

It turns out that npm does have a pretty good [dispute policy](https://www.npmjs.com/policies/disputes), but it [doesn't seem to be widely known or applied](https://github.com/npm/policies/issues/41). 



https://github.com/npm/policies/issues/41


My first 
 
Ever since getting involved with web development - going right back to the days when all I did was clean up html copy & pasted from word andd was introduced to firefox, a web browser ("what's a web browser?") that doesn't break - I've loved the idea of open source. And not just the idea, I also love the reality, that the vast majority of the tools and libraries I use daily are completely open source.

oracle buying MySQL


 are out t but have become increasingly disillusioned with how the community functions. In particular, over the concept of ownership.

I should start with a disclaimer and own up to having made more than my fair share of ill-informed bug reports, poorly executed patches and misguided new features

what happens when an open source project starts to get a build up of legitimate pull requests unpulled

or a poorly executed app needs to be rewritten e.g. colorbox.

suffers from teh myth of the free market having perfect knowledge

I think with the advent of distributed versioning tools such as git moer distributed ownership of open source projects could be a reality. What if github gave more equal prmoinence to all forks of a project... or perhaps prominence based on age and amount of activity/likes

Is this a witch hunt? No. It's a plea for people to share ownership of their project sif they become too popular for them to maintain alone

Open -sores