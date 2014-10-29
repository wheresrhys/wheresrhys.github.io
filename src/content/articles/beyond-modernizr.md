---
template: post.html
title: "Beyond Modernizr"
date: 2014-04-07
---
Few javascript libraries have achieved the ubiquity of Modernizr. It's up there with the jQuery's of the world as an indispensible tool and is the de facto standard when it comes to feature detection in the browser. 

It's enabled us to develop sites using new browser features before they become universally available. It's made developing for an increasingly fragmented ecosystem of browsers not only possible but predictable and easy. I also have a soft sport for Modernizr as it's the first open source project I contributed code to (albeit in a very minor way).

Nevertheless I do have one major gripe with Modernizr, namely that I have to use it at all. I don't want to download and execute an additional javascript file before the rest of my page can load. In the mobile age, where performance is increasingly given equal footing with design, functionality and content, this additional cost prior to page rendering should be avoided if at all possible.

But given that the html specs are now a working, evolving document constantly being added to, and that browsers will implement any new features whenever they like (even before they're added to the spec) the problem of feature detection is not going to go away, and it's not going to become less important. So if the problem is here to stay and the solution is suboptimal, what do we do? 

The answer's obvious if we start from the principle that solving a universal, persistent problem on the web shouldn't, long term, be the responsibility of a utility library; it should be resolved by the specs and browsers themselves.

So I suggest browsers implement a `window.features` object which, more or less, duplicates the `Modernizr` object i.e. for a given feature `window.features.theFeature` is a boolean denoting whether or not the browser supports it (in reality, it would likely either be `true` or `undefined`). Then Modernizr would become a polyfill for `window.features`. Modernizr's [lack of a] naming convention for features would need to be looked at, but that's a minor niggle. 

As well as the javascript API Modernizr does of course offer the convenience of adding css classes to enable feature detection within stylesheets. This is fine, but with native feature detection support the browser could do much better and give us access to a new category of media query `@media (feature: svg) {}`. Adding a feature to `window.features` would have the side effect of making the media query for that feature truthy.

Polyfilling this with Modernizr would be less straightforward than the javascript implementation, likely relying on continuing to add classes to the html and duplicating style blocks:

```css
@media (feature: svg) {
  /* styles */
}
.svg {
  /* styles */
}
```

… though with css preprocessors and gzipping this isn't necessarily onerous to write or hugely detrimental to file size.

To sum up, what I want is a day when I only have to run a single feature test in my code

```javascript
if (!window.features) {
   // download Modernizr
}
```

Now, wouldn't that be nice.