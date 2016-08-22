---
template: post.html
title: Semver abuse
description: Is it ever OK to break an API in a minor release?
date: 2015-09-27
---

It's safe to say that I'm now very much used to working with components. I've been a siginificant contributor to both a [library of components](http://registry.origami.ft.com/components) and the [specification governing them](http://origami.ft.com/docs/component-spec/), and am now working on a [project](http://financial-times.github.io/next/) that consumes these modules and a plethora of others in a microservice architecture. I have also tattooed 'npm' on one shoulder and 'bower' on the other, and am debating whether I should go for a vintage 'browserify' or the more contemporary 'webpack' on my nether regions.

Underpinning all this componentisation is semver, both the [specification](http://semver.org/) defining how these version numbers relate to a release's contents, and the [node module](https://github.com/npm/node-semver) that parses these version numbers. Between them they make it possible for an application to request versions of components compatible with a given range.

To recap, here's what the semver spec says:

> Given a version number MAJOR.MINOR.PATCH, increment the:
* MAJOR version when you make incompatible API changes,
* MINOR version when you add functionality in a backwards-compatible manner, and
* PATCH version when you make backwards-compatible bug fixes.

So semver, used correctly, rigidly communicates to consumers (be they human or machine) how significant the code changes in a release are. Consumers can therefore make informed decisions about how to respond to the release. [Semver ranges](http://semver.org/) such as `~1.2.3`, `^2.3.4`, `>=2.9.7 < 4` are the standard way for machine consumers to specify whether to accept a given new release or not. If you have faith in a publisher's use of semver it's fairly safe to use the semver range `^2.3.4` or similar in your dependency manifest as this literally means 

>Accept all releases which don't change the API in an incompatible way compared to version 2.3.4 

(In the rest of this article I'll be assuming that `^2.3.4` is the type of semver range generally used by consumers of a component).

But there is a downside. When working with a large componentised architecture releasing a major version of a component can be a devil to roll out as each dependent will need to have its dependency manifest (package.json, bower.json etc.) updated. Any that are missed will languish with old versions of the component installed, leading to a range of problems e.g. 
 - If a component is updated to stop fetching data from a deprecated service any applications which don't have the update installed will break when that service is switched off
 - It becomes confusing for developers when different major versions of a component are used in different places - 'How is this version different to that one?'
 - If an application really needs some feature only available in a more recent major version it's difficult to know if upgrading will be a big task or not

On a few occasions recently myself and colleagues have released breaking changes as minor releases. We've been doing so bashfully, referring to them as a 'cheeky ~~Nando's~~ minor', or apologising for them in our chatroom. But these abuses of semver have in fact had a positive impact on the release process - things get stuck on the last major version less often, increasing the uptake of the latest patches and new API features. So I've been trying to understand what distinguishes these benign semver misdemeanours from semver attrocities.

For me the key is to think of semver as a communication tool to tell consumers something about your component. Then the main factor which determines when it might be OK to abuse semver is how critical semver is to how you communicate with your consumers. 

If your knowledge of the component's consumers is limited and semver is your only reliable way to communicate to *all* of them (this is typically the case for open source projects) then stick to the semver spec *to the letter*. It's irresponsible to break a convention when you have no reliable way of communicating that you're doing so. If you introduce a breaking change without releasing a major version you will have failed to warn your consumers, using the only channel open to you, that the release may end up breaking their application. 

If, however, you have complimentary channels to communicate and manage software updates for *all* your consumers then it can be OK to be less strict. For example, if you're creating components for internal company use (albeit possibly using open source registries, such as npm, as a delivery mechanism) then it's probable you will have good information about who your consumers are and have additional channels to communicate with them. You may have some influence over their codebases and deployment processes too. It may even be the case that the only consumers are your team and the applications you've written. 

In this case semver is complementary to other tools and practices used by you and your component's consumers. You may be able to release a breaking change as a minor or patch version provided:
 - You know about all the teams and codebases that consume your component and what service level you're expected to provide to them
 - You communicate well about the change to your consumers. You should have 100% confidence that information delivered via these other communication channels will get through
 - The risk of something breaking for the end user is negligable. As an additional consideration it's worth thinking abut whether the risks and costs of your breaking something are smaller than those caused by some consumers failing to update their code. 

As an example of when we've done this, in [next-build-tools](https://github.com/Financial-Times/next-build-tools) (a cli for building and deploying microservices and components for [next.ft.com](https://next.ft.com)) we wanted to add a subroutine to `nbt verify` to check for version parity between certain node modules and their bower equivalents, and fail the build if the condition was not met. Rather than making this sub-routine an opt-in, we decided it would be better to have every microservice's build run it by default, with the ability to opt out for those which didn't require the parity check. This would cause every API microservice's build to fail with:

```
Error: `next-build-tools verify` now checks to see if your bower and npm component versions match. If you're building an app without a UI `next-build-tools verify --skip-layout-checks`
```

But this breaking change would never affect the end user as our CI pipeline won't deploy given a failed build. The breakage was well-communicated via our dev chatroom and the informative error message so it was also easy for consumers to adapt.

The end result of this was that all applications for which it was relevant started carrying out the bower-npm parity check without requiring any code changes. Granted, a lot of other applications' builds had to be modified slightly, but in a very simple way and only when they were being rebuilt anyway, so the cost was low. No `package.json`s needed to be altered and all applications continued to receive all the latest new features and patches. I call this a win.

In a curious twist, the bigger the breaking change the safer it is to take this approach. If you're sure that your change will break any build of any codebase that is incompatible with the new API then the code won't get deployed to production. A smaller, more niche change e.g. removing a long ago deprecated method, though superficially less dangerous is more likely to slip through the net and cause bugs in production. But in these sorts of situations it can still be possible to release the change as a minor release *if* you work to make the risk of a break in production negligable e.g. search the codebase of each consumer to make sure all dependents will cope with the change.

Don't get me wrong, I still think respecting semver is the right approach most of the time - I'm not advocating releasing sweeping API changes as minor versions. But for changes which are technically breaking but carry low risk and are limited in scope a well-managed minor release can be both easier and less time consuming to roll out. From a code comprehensibility point of view it will also lead to a closer correlation between major releases and truly significant API changes - no more wondering if v14 is a complete departure from v13, or if it just removes a long-deprecated method.

Semver is an indispensable tool, but if you're striving to have all your applications running the latest component code it can get in the way. If major semver versions are making it hard to upgrade your dependencies it might be worth bending the rules occasionally.