---
template: post.html
title:  "One careful owner"
draft: true
---

A friend of mine, on recent completion of a half marathon, posted:

> Complete set of running gear for sale, large, almost new, low miles and only one knackered owner. Offers?

... which is pretty unrelated to the rest of this post, other than it reminded me to write something about the ownership of open source projects.

The very phrase 'open source' conjures up images of a utopia; a democratised software ecosystem, where the best ideas and code become widely adopted through a process not dissimilar to natural selection. Everything - including important decision making - is both shared with and owned by the community.

But of course the reality is far from that. For myriad reasons most code has one or more owners who get the final say on what changes are made, ranging from tiny bugfixes to decisions about the direction and scope of the project. For the most part, this is of benefit to the community as it protects us from malicious or irresponsible 'contributions' to the codebase.

But it can sometimes become dysfunctional. If a package owner doesn't have the time or inclination to maintain it, then its presence in your dependency tree - particularly when it's a subdepency of one of your direct dependencies - can become irksome. The [github issue](https://github.com/eugeneware/debowerify/issues/29) that initially inspired this post is an excellent example. A [PR](https://github.com/substack/node-falafel/pull/24) to fix a problem that prevented `npm shrinkwrap` from running was ignored for *a year and a half*, despite it passing tests, being supported by a number of consumers of the package, and being owned by a prolific and highly-regarded member of the nodejs community. 

It turns out that npm does have a reasonably good [dispute policy](https://www.npmjs.com/policies/disputes), but it [doesn't seem to be widely known or applied](https://github.com/npm/policies/issues/41), and is also mainly aimed at transferring ownership from one user to another. What's often needed is transferal of a badly maintained package from a single user or organisation to a wider community that between them have the ability, time and enthusiasm to maintain it.

But that's not so easy. Take [fastclick](https://github.com/ftlabs/fastclick) a utility developed at FT to help give their webapp a more immediate, native app feel (most touch screen browsers, [until very recently](https://developer.apple.com/library/mac/releasenotes/General/WhatsNewInSafari/Articles/Safari_9_1.html) delayed responding to taps for 300ms), and subsequently open sourced. It serves a product that must meet high QA standards, so opening it up to community moderation without a bit of effort establishing governance would be unwise. And accepting pull requests and fixing issues which don't impact all that greatly on the webapp - and could in fact break it, in turn requiring additional developer and QA effort - are difficult to justify. The repo currently languishes with 59 pull requests and 134 open issues; that's a lot of frustrated effort from the community.

I didn't pick out either of the examples above in order to name and shame. My first reasonably widely used package, [fetch-mock](https://www.npmjs.com/package/fetch-mock), just hit 70 stars on github, and there have been a steady stream of pull requests from the nodejs community. All in all I'm feeling quite pleased and enthusiastic about that. But there will come a time when my enthusiasm wanes and I will grow tired of closing issues written by people who didn't read the docs properly, or rejecting pull requests that don't meet my vague criteria for acceptance. And if it continues to grow in popularity and become a dependency of more and more projects I am ill-prepared to moderate the boundary between my code and the community who use it. But I am also unable to confidently share ownership with anyone who meets the key criteria of being an active contributor, and whom I know enough about to trust with a project others rely on.

This isn't unique to me - if it's true of the substacks and the Financial Times' of the world, then it's fair to assume it's true of very many owners of open source projects. This in turn makes *all* our projects brittle as a poorly maintained dependency is a dependency to avoid... and we're all using loads of them.

So how do we fix this endemic problem? I think npm has a role to play here.

Once a project grows to become a widely used dependency I'd argue it's irresponsible for npm not to have an opinion about who owns it. It should have a policy advocating shared ownership of modules once they reach some reasonable milestone indicating they are widely used. As npm host the registry they are in an ideal position to monitor how much the community uses a package and could suggest - maybe even require - that packages owned by a single user are opened up to at least one other collaborator.

Further to this I think npm should be more proactive about encouraging shared ownership as a natural part of publishing a component. Rather than merely playing the role of arbitrator between parties when disputes about a package occur, it would be good if a community of npm superusers could be established, both empowered to step in to improve the state of a package when it falls below the standards one would expect from an important dependency, but also playing an active role in supporting promising-looking projects from their very beginning. All too often the world of open source feels like a competition; the more we can do to foster collaboration the better.

npm/nodejs have made great strides forward in the last year on both the technology and vision side, but, to adapt a common mantra of the web, it's the content that matters. No matter how good npm's infrastructure is, attention still needs to be paid to the content it hosts - the packages - if it is to deliver the service its consumers need.

http://blog.npmjs.org/post/94662089625/the-future-of-the-npm-website-lets-map-this#ecosystems

Would this discourage open-sourcing of code by organisations who need control?


Open -sores