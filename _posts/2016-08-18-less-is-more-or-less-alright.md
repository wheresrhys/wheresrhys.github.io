---
layout: post
title: Less is, more-or-less, alright
description: Does less code necessarily mean fewer bugs
date: 2016-08-18
---
There's a meme currently making the rounds of web developers. It goes a little like this:

> Bugs happen in code, so the more code you have the more bugs will happen, so the less code you write the better, ergo, write less code

There's some truth in this, but I feel it's it's been repeated enough to become dogma. Bugs _do_ happen in code, but more accurately, bugs happen when code runs up against an unexpected invocation. Does writing less code protect you from this? Not necessarily.

Given a software system there are certain tasks that need completing e.g. 

> Submit credit card details and receive confirmation or rejection

or 

> Submit a friend request and receive a humiliating rejection

For these two examples it's certainly possible to pick out lots of similarites between the two tasks, to the point where those similarities could be abstracted away into a common library, leading to less duplication and redundancy, _less code_ and - abracadabra - fewer bugs!

Except that's clearly madness. Despite some superficial, and possibly some deep, similarities, the two tasks have great potential to diverge from their current requirements, leading, in time, to greater complexity in having to support both, lack of good domain knowledge in the team[s] that maintain the code and, ultimately, more bugs.

So why is this 'less code' bad, and other 'less code' good? How can we find our way to a good 'less code'.

I think it lies in whether the simplification in the code has a knock on effect on simplifying the space of tasks the application models. In the example above, a single library with lots of conditionals to branch between the credit card and friend transactions can hardly be said to be simpler conceptually than having two separate libraries. If anything it's more complex - rather than having two tasks that do some similar things, we now have a single task which repeatedly diverges and converges in its behaviour.

So how could we reduce our code footprint *and* reduce complexity? The answer, as is often the case in good programming, lies in abstraction and composition. 
For the example above, the way to exploit the similarities between the two tasks isn't to blindly merge the two code-bases at every point of contact, but rather to identify which of the similarities map well to higher abstractions, e.g. both the credit card and friend transactions could piggy back on to shared authentication, queueing, and UI systems but - and this is crucial - these systems should contain no information about the systems (friend, credit card) that call them. There is a world of difference between `CreditCardAndFriendSharedStuff` and `AuthSystem`, `QueueSystem` and `UISystem`.

In addition to having less code repetition (though not necessarily fewer lines of code at first), this will also have the effect of reducing the complexity of tasks to be handled - a greater number of small tasks is typically easier to reason about and maintain than larger complex tasks. 

So is this what people are getting at when they urge writing 'less code'? I think it's more than this. Once you start to abstract away pieces of your application into shared APIs this can lead to a greater understanding of how it all fits together, which in turn can render insights into how things could be done differently, leading eventually to even more useful higher abstractions or - the holy grail - realising that a task is *no longer necessary*, meaning you can delete the code that carries it out. 

*That* is what good 'less code' looks like - it's a symptom of 
'less complexity', which in turn is a consequence of better undertsanding and abstraction. It doesn't come easy, but it's a lot more rewarding, and genuinely effective at reducing bugs, than just deleting the odd line here and there.
