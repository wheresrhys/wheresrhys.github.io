---
template: post.html
title: A very specific problem
description: How specicifity leaves a bad smell all over your stylesheets
date: 2014-03-02
---

There are many things that are 'the' bane of a front-end developer's life. Many of these are a consequence of the fact we have to support an ever growing number of environments with increasing, rather than decreasing, variance in their adoption of given APIs. Even though browser vendors now cooperate more fully than in the past when it comes to writing and implementing the standards, a large chunk of our audience still visit our sites using legacy browsers.

As well as restricting access to new APIs this slow and piecemeal upgrading of the web has another side effect - it's nigh-on impossible for the specs to make breaking changes, therefore bad engineering/design decisions stick around for a long time. 

I was recently in a workshop with [Harry Roberts](http://csswizadry.com). Most of the contents of the workshop were about how to avoid getting into specicifity wars in CSS. As an aside he mentioned that specicifity is arguably a bad feature of CSS that should never have been put in in the first place. 

The more I think about it, the more I agree with this. If you adopt the good practice of writing your styles in a cascading fashion, starting with generic ones and gradually adding those for narrower use cases then specicifity is not needed and can often be a hinderance. With the exception of `!important` specicifity could be done away with altogether (inline styles, as the last styles in the cascade applied to an element wouldn't need any special specicifity either).

But how to get rid of specicifity? The web is built on HTML, CSS and javascript, and it's hard to envision any of them disappearing soon. But due to the inherent non-upgradability of the web we can't have some browsers suddenly ditching specicifty as it would likely break a lot of sites and place a heavy burden on developers to upgrade their stylesheets to not rely on specicifity.

An alternative might be to define a new standard styling language which can be included alongside CSS stylesheets - specicifity isn't the only gripe people have with CSS and it might be worth starting from scratch on a new, improved standard, which newer browsers would favour over CSS if stylesheets using both standards are provided.

But again, this would place a heavy burden on developers to maintain two differet types of stylesheet, and to learn the differences between the two standards (onerous whether it's learning a totally new syntax or memorising the subtle differences between the two). It also places high expectations on browser vendors to back, implement and maintain a new standard.

I think what the web needs is a new attribute on the `<link>` tag:

```html
<link rel="stylesheet" href="main.css" specicifity="false" />
```

which developers can use to turn off specicifity in browsers that support doing so. Stylesheets written using a well structured cascade from general to narrower use cases *should* still work fine without any change. They will likely already contain a few extra-specific style rules in order to cope with specicifity problems in existing browsers, but as long as these specicifity overrides are included in a sensible order then removing specicifity shouldn't lead to them getting overridden by other styles. And testing to see whether your styles work with specicifity on or off is trivial - just add or remove the `specicifity="false"` attribute. Any styles that need to preserve specicifity (for instance to override third party styles) could have it re-enabled using, for instance a css property `specific: true`.

As well as getting rid of what is probably the hardest problem while writing scaleable CSS, removing specicifity would likely improve rendering times slightly as it's one less thing for browsers to have to process. It's probably also not particularly difficult for browsers to implement (I'd be surprised if it doesn't boil down to skipping over a step or two when parsing and rendering).

So, who's with me?