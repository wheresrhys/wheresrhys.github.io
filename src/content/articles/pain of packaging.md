Package-aggedon

I've recently been working on a component, fetch-link, primarily aimed at server side use, using an API (fetch) first conceived in the browser but now (via isomorphic-fetch) available on the server too. It's all great and fine and easy though because it's all isomorphic and didn't God tell Moses something like 'Thou shalt isomorph', so it's all easy and great and fine and not a pain to do at all.

Ha!

What a mess javascript package managment is. 

I was moved to tweet the following recently ... how remarkable that 17 dependencies can multiply to become 550. This alone is reason to be suspicious about using npm as your package manager for client side code. Unless you limit yourself to some strictly curated set of modules you *will* get bloat. In fact, it's not you getting it that's the problem; your *users* will. And the only thing they hate more than bloat is tartare sauce, for which you can't really blame them.

Enter bower, the package manager with the heart of chrome and carbon footprint of a weevil (weevils, famously, are the only insects known to actively sort their plastics before recycling). Bower will only ever include a single version of a module, and will hit you over the head with the semver resolution stick until it's satisfied with the outcome. But it requires an additional bower.json manifest to define its dependencies which, in turn, requires that your dependencies and their dependencies and so on and so forth most also declare the same. This is a world of pain. Having written my module with a single npm dependency I descended down a parallel rabbit hole of polite pull requests and slightly unreasonable begging letters in order to fit it in to bower world. 

I work with bower [every day](http://registry.origami.ft.com) but I've slowly come to the conclusion that it's a bad solution to the problem. I'm a programming monoglot, so I don't know much about maven, gem or egg-basket (my made up name for python's package management system)... what I do however suspect is that packages in other languages don't generally publish multiple manifests for different package management systems. With js it gets even worse, with yet another packagemanager, jspm, arriving relatively recently, and npm eyeing both it and bower it up with the intention of producing demon spawn jspbownmpmer sometime in mid 2016. I don't know about you, but I can't even pronounce jspbownmpmer (well, I can, but only because I made it up. You may *think* you can, but you're probably wrong. For instance, the 'w' is silent and both 'm's are sarcastic...).

Having multiple parallel package management systems for what are largely interoperable, and often overlapping, ecosystems of packages is, in its current form, at best an inconvenience, and at worst a barrier which prevents good solutions to problems promulgating to where they are needed. So should we just stick with npm? I think this is wrong too; I'm an admirer of bower's strict one-version policy, which puts source code size at the heart of dependency mangement. This isn't, and shouldn't be, a primary concern of npm so there is a definite need to have something bower-like out there.

So how do I have my cake and eat it? (TL;DR - Um...)

Let's think for a second about what it means for package `P`'s package.json to specify `R@{some semver range:X}` as a dependency. Taken literally it means 'I rely on package `R` at a version compatible with the semver range `X`'. But interpreted more liberally it can mean 'I rely on any package S which implements the same API as `R` for some version compatible with `X`'.

A second observation is that package manifests only tell us about valid *bilateral* relationships betwen packages, `A` is a dependency of `B` and so forth. If `C` is also a dependency of `B` the manifest will not tell us anything about the validity of the *multilateral* relationship between `A`, `B` and `C`. This information arises from the interaction between the manifests and the package management system. For this reason a range of packages with identical dependency trees could be installable in npm but not in bower, which has far stricter rules for validating multilateral relationships. Other than that it doesn't differ all that much from npm.

Armed with these two assertions, this is waht I think would be a better plan of attack for managing client side dependencies... with the huge caveat that I probably don't have the first idea of how impractical this really is.

Firstly, we need to recognise package.json as the canonical description of a package's dependencies. 

Secondly we need to allow consumers to override 

So here's how I would implement browserPM, my ideal world package manager for the web.

I think in general a better solution lies in recognising package.json as the canonical representation of a component's version and dependencies. No doubt there are problems with this - bower didn't reject hitching a ride on package.json for nothing, I'm sure - but I think conceiving rival package manifests leads to too much fragmentation. It also rests too much power into the package author's hands. It's a bugbear of mine that very many open source projects may well have open source code, but are actually nowhere near as open and collaborative, or even as considerately managed, as one would like (here's an example of how I think it should be done [linkto debowerify]). Getting a package author to update their package.json is one thing, but getting them to add a bower.json, educate themselves about bower, stop using a package unavailable on bower but with a perfectly good bower-friendly alternative... etc. a) why should they care? b) why should they have the final say?

Far better than depending on additional package manifests in the repo is to distribute as best as possible decisions about dependencies and packaging to the alternative package management system and its community of converts, using package.json as a starting point. This could occur by means of some overrides specified within a package if the package owner is among the converts. If an override isn't present I would fall back to a public registry, closer to bower than to npm in spirit - all that's available on bower is metadata about packages rather than the packages themselves. And overriding all the above should be possible in the end user's configuration. 

But what to override?

