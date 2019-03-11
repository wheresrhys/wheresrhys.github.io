# The DOM is not the enemy

It's been stated before that [the DOM is a terrible API](http://programmers.stackexchange.com/questions/147451/whats-so-bad-about-the-dom), and it was... by golly it was.
The Dom _used_ to be a pretty hostile environment... but we _coped_, even thrived. Such landmark applications as google maps, gmail and  ... tamed the DOM



Let's get one thing straight first - React is a virus. 

> a piece of code which is capable of copying itself and typically has a detrimental effect, such as corrupting the system or destroying data.

If someone tells you they want to 



React is not a solution to problems caused by a bad API; it's a solution to problems caused by bad programmers

3 tabs, cycling automatically, content refreshing automatically, _no layout change outside the affected DOM_ within which manipulation was _almost 100% destructive_. the reason React was brought in was because it made it easier to reason about the problem; a single state being mutatted and propagating outwards was easier than managing the relationships between the 3 moving parts manually. 

What is so hard about managing that state? Cycling tabs is pretty much identical to a carousel, which we've all coped with for years. Polling the server for new content is also not new. I see no great complexity inherent in this feature. Say, for argument's sake, it _is_ easier to reason about with React, what gives the developer the right to introduce a new programming language and infelxible paradigm to address a problem which is demonstrably well within the bounds of the existing tools.

But what marks me out as being something other than a curmudgeon (which I am), just being obstructive (which I can be) and unwilling to learn new things (which I base my life upon) is that I am starting to see React get in the way of some great overtures being made by the DOM. Or to speak about it more accurately, the web platform.



A few months ago at the FT there was a taste of thinsg to come when we had trouble integrating [o-date] with our new section pages, which were built using React. o-date is a very simple utility which runs a single timer and uses it to update the relative time displayed by any date element on the page. When integrating with a react based page that polled for new content and dom-diffed and refreshed the entire page's contents, very strange errors were thrown in a variety of browsers, leading to hours, maybe even days, of lost development time debugging a bug which can only be described as a consequence of _React's hostile takeover of the DOM_. A solution was eventually found, and we moved on, though I, and other skilled web developers on the team, felt very uneasy about not being able to work on our section pages without having to forget all I had learned over many years about the web platform. 

A few years ago, during the dark days of ie6 & 7, a normalising API like jQuery made sense as an intermediary layer. But in today's optimistic (_don't mention Trump or Brexit_) times it looks like madness to put a barrier between developers and a generally well-behaved and powerful API. To me it feels very similar to the experience I had recently when working with a data provider that only provided a UI, wehn I'd been accustomed to using one that had a series of RESTful APIs - once you have the expertise to use the power that's under the hood, anything less than full access is frustrating




