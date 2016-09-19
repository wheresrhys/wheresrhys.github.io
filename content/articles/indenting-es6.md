---
template: post.html
title: Jekyll go home
description: Some suggestions for code formatting conventions in ES2015
hashtags: #ES6 #ES2015 #coding #javascript
date: 2016-09-19
---
# Indenting ES2015

Indentation is something all coders have a love/hate relationship with. To a point, it makes code more comprehensible, indicating which statements should be thought of as a larger whole and also pointing about where the language's block-level features are being applied. But taken too far it can lead to a confusing mess; there's a reason it's called the pyramid of doom. In some cases even a couple of levels of indentation can be confusing (after scrolling down a screenfull of statements try remembering if that `}` closes a `for` loop or an `if`...)

Indentation, as implied in the last sentence, is almost invariably accompanied by the presence of a curly brace, something all C-family languages have in common. A few years ago when I contemplated learning Ruby and Coffeescript I was ambivalent to their whitespace-sensitive, curly brace free worlds. 'It's more expressive, closer to natural language', screamed the advocates. 'Its like sentences if you can even call them that without proper punctuation', I garbled back from my `{` crenelated `}` codebase. 

But something interesting has happened lately; javascript has belatedly begun to add new programming concepts and cross-pollinate with other languages, leading to code that looks very different.

First up, Promises. The pyramid of doom, easily fallen into in callback-era code, is now easier to circumvent thanks to `.then()`

```
myThing()
	.then(function (result) {
        // do some sync stuff first then
		return doAThingTo(result.value)
	})
	.then(function (result2) {
        // do some sync stuff first then
		return doAnotherThingTo(result2.value)
	});
```

This is far neater than a lot of similar code written using callbacks. In the code sample above I've used the convention we've adopted (though not strictly enforced) at the FT of indenting `.then()` calls by a single tab, which makes for very readable code. I've also avoided nesting `then()` calls (e.g. I could have had the second then directly attached to the result of `doAThingTo(result)`), though sometimes the nature of the procedure demands some nesting e.g.

```
myThing()
	.then(function (result) {
		if (result.ok) {
			return result.contents()
				.then(function (contents) {
					return contents.values
				})
		} else {
			throw 'Not ok';
		}
	})
```

It is _possible_ to write the above using flatter indentation, but often it's just easier to nest a little; the flatter your `.then()` tree the more you have to worry about ignoring or handling certain kinds of error in your calls to `.catch()`, so sometimes a bit of extra indentation is the lesser of two evils.

So far, so dull, but also fairly readable. Now let's introduce another ES6 feature to make it even better - arrow functions. The first example above becomes

```
myThing()
    .then(result => doAThingTo(result.value))
    .then(result2 => doAnotherThingTo(result2.value));
```

This is starting to look quite beautiful. So now for a slightly more complex example

```
this.keys()
    .then(keys =>
        Promise.all(
            keys
                .map(key =>
                    this.db.get(key.url)
                        .then(({expires} = {}) => ({key, expires}))
            )
        )
            .then(lookups =>
                lookups
                    .sort((i1, i2) => {
                        return i1.expires > i2.expires ? -1 : i1.expires < i2.expires ? 1 : 0;
                    })
                    .slice(count)
                    .map(({key}) => this.delete(key))
            )
    )
```

Wait... who did what in the where, now??

Finally I'm getting to my point - all these ES6 goodies (and ES5 such as `.map()`) may help us slay the old readability dragons, but they've brought some dragon eggs with them, and it feels like they're just coming to the end of incubation. I've found myself reading code (written by others, or by myself in the recent past), which demonstrates confidence in the language, is concise as a word and elegant as a swan in an evening dress, but lacks many of the visual cues I'm used to seeing in javascript. The above example - excluding object literals - contains only _a single pair of curly braces_, but the logic it carries out is Teotihuacan in scale, and, even though I wrote it... I find it pretty confusing to look at.

There are simply no established practices regarding how we format and indent code written using new ES6 features, and, as a result, there's a danger our code will gradually become an incomprehensible mess. We have tools like eslint and lintspaces to enforce coding style on a more granular level, but these, I fear, lag behind the expressiveness of the modern language.

So our best hope here is to establish good conventions, and avoid code smells. Here are a few I think may be worth starting with, and the reasons why. They're not rules I rigorously adhere to yet - I'm having way too much fun with the new language features to let trivial things like ease of comprehension or maintainability bother me - but when this ES6 world gets too much, I will return here to read the words I TOLD YOU SO!

## 1. There is no shame in being verbose
Not a rule, but more a guiding principle. We're often led to believe that concise code is cleaner and better, but the less you write the harder it is to be explicit about your code's intention. If in doubt, press more keys!!

## 2. Always indent `.then` calls on a new line
As mentioned a few paragraphs above, it makes for readable Promise chains

## 3. Start a new line and indent any array methods where more than one is used in a chain
Again, this makes for more readable code. The reason I don't argue for _always_ starting a new line is that often the methods will be used to apply a very basic function - e.g. extracting a property from an object - and insisting on indenting can lead to more visually-fragmented code e.g. the following almost looks like it could be a mistake, and would be clearer written on one line
```
myThing.getProp.getArrayPromise(arr => arr
    .map(item => item.key)
)
```

## 4. When applying array methods within a `Promise.all`, always indent the target array if using more than one array method

This more or less follows from the last point. I would rather look at
```
Promise.all(
    myArray
        .map(item => item.thing)
        .filter(thing => {
            if (thing > 1) {
                return 'ham';
            } else {
                return 'egg';
            }
        })
)
```
Than
```
Promise.all(myArray
    .map(item => item.thing)
    .filter(thing => {
        if (thing > 1) {
            return 'ham';
        } else {
            return 'egg';
        }
    }))
```
or 
```
Promise.all(myArray.map(item => item.thing).filter(thing => {
    if (thing > 1) {
        return 'ham';
    } else {
        return 'egg';
    }
}))
```
In ES6, parentheses often play a similar signposting role to curly braces; a lack of discipline in where they're applied should hurt our eyes as much as
```
if (thing)
{
    if(otherThing) callMe()
    else {ignoreMe()}
} else if (anotherThing) {
    blahBlah()
}else{whatever()
}
```

## 5. Prefer to use curly braces and a `return` statement for complex _anonymous_ arrow functions
It's great to use e.g. `arr.map(entry => entry.name)`, but, as in the database lookup example above, it's possible to return far more complex results, such as `Promise.all` wrapped maps of maps of arrays. In addition to the lack of `return` statements making it confusing work out what - if anything - is being returned, the code is complex enough to develop bugs. It will therefore require stepping into or logging while debugging. The fewer explicit statements there are in your code, the harder it is to jump in exactly where you want, so your code may need a rewrite to become debuggable. These rewrites will involve putting new curly braces in exactly the right place within a series of nested parentheses. It's very easy to make mistakes, and it just isn't worth this much pain to save typing a `return ` and a `{` `}`. 

## 6. When within a `.then()` call, try returning Promises before calling `.then()` on them
This is very similar to stating 'Avoid nesting `.then()` calls', but offers a technique to help achieve this. It can be hard to spot when you're doing unnecessary nesting, but a good question to ask is 'Could the Promise I'm `then`-ing have been returned before I called `.then()` on it?' By asking this question just now I spotted an unecessary nesting in the database example above which I'd previously missed despite staring at the code for days.

e.g.

```
query()
    .then(results => {
        return Promise.all(results.map(getter))
            .then(finalCalculation)
    })
```
could be rewritten as
```
query()
    .then(results => Promise.all(results.map(getter)))
    .then(finalCalculation)
```

## 7. Declaring named functions matters as much as ever, 
Arrow functions and chainable methods may make manipulating data inline more concise and less cluttered, but ease of authorship of the _parts_ of the program does not equate to clarity of the whole. As it's now far easier to make the magic happen inline, it perhaps requires a little more discipline to recognise when a program is complex enough to benefit from abstracting into discrete parts. And our code can only really be self-documenting if we take it apart and give the constituent parts good names.

The code below achieves the same result as the database example above (ignore the sloppy use of `this`). Its also roughly the same number of lines as before - abstracting away the complex chains into functions means the remaining wiring can be written clearly with far less need for additional indented lines.

```
const decorateWithExpiry = key => {
    return this.db.get(key.url)
        .then(({expires} = {}) => ({key, expires}))
}

const deleteOldest = lookups => {
    return lookups
        .sort((i1, i2) => {
            return i1.expires > i2.expires ? -1 : i1.expires < i2.expires ? 1 : 0;
        })
        .slice(count)
        .map(({key}) => this.delete(key))
}

this.keys()
    .then(keys => Promise.all(keys.map(decorateWithExpiry)))
    .then(deleteOldest)
```

- - -

Is seven points enough? I reckon so.