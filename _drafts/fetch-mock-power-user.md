# fetch-mock power user guide

fetch-mock, I'm told, has an intuitive, well-documented API that covers most common use cases without much difficulty. 

That said, once you've got a handle on the basics, it's worth digging into  how you might use some of fetch-mock's advanced features to cover less common scenarios, or to improve the readability of your existing tests. 

The existing documentation does describe what these are, but is perhaps a bit too abstract to guide you in how to make use of them. So I thought I'd write a short post with som emore practical examples.


## Avoiding cluttered, repeated mock set-up by extending fetch-mock

Let's say you're testing an application with an authorisation layer. Your tests might contain something like the following to serve differnt responses to signed in and signed ou users.

```js
fetchMock
	.mock({
		url: 'http://me.com',
		headers: {
			authorization: 'Bearer 12345'
		}
	}, 200)
	.mock({
		url: 'http://me.com'
	}, 401)
```

If every test contains set up like the above, it can add up to a lot of extra code to maintain, and it takes a few seconds to read the mock and understadn what it's doing. By extending fetch-mock you can express the same thing more concisely and clearly, with less repetition.

Firstly, you can use the `addMatcher()` method to roll any combination of matching conditions into a declarative key/value on your matcher object:

```js

fetchMock.addMatcher({
  name: 'isAuthorized',
  matcher: shouldBeAuthorized => (url, {headers: {authorization}}) => 	
  	shouldBeAuthorized ? authorization : !authorization
})
```

Now, in each mock, there is less to read, and the intent behind your mock's conditions are clearer:

```js
fetchMock
	.mock({
		url: 'http://me.com',
		isAuthorized: true
	}, 200)
	.mock({
		url: 'http://me.com',
		isAuthorized: false
	}, 401)
```

Taken a step further, you can use the `defineShorthand()` method to make your code even more expressive

```js
fetchMock.defineShorthand('signedIn', 'mock', {isAuthorized: true})
fetchMock.defineShorthand('signedOut', 'mock', {isAuthorized: true})

fetchMock
	.signedIn('http://me.com', 200)
	.signedOut('http://me.com', 401)
```

Using `addMatcher()` and `defineShorthand()` together was just 7 lines of code, but the behaviour we've added using them can make our entire test suite more concise and expressive. In terms of lines of code, the example mock has been reduced from 10 down to 3 lines, so we break even after just 1 test.

## Race conditions

fetch-mock has two ways of specifying the timing of fetch responses
- a simple declarative `delay` option
- allowing the user to use combinations of functions an Promises, with limitless recursion.

Say you want the second call to a url to respond before the first one, this can be done declaratively:

```js
fetchMock.
	.once('http://me.com', 'one', {delay: 10})
	.once('http://me.com', 'two')
```

What the above expresses is that the first response should be delayed by 10 milliseconds. This can, depending on your application's flow, guarantee that the second fetch responds first. 

But what if your application does a lot of work before making the second call? 10ms might not be enough time to delay the first response by to ensure the second one is handled first.

When you want fine-grained control over which order fetches respond in, you can use functions and promises:

```js
let resolveFirst;

fetchMock.
	// Use an unsettled promise as the first response, and expose
	// a method which allows the second featch response to trigger 
	// its resolution
	.once('http://me.com', new Promise((res) => {
		resolveFirst = () => res('one')
	}))
	// Use a function as the second response. This schedules the first
	// response to resolve and then responds itself
	.once('http://me.com', () => {
		setTimeout(resolveFirst, 1);
		return 'two'
	})

```

There's an issue on the project to add a more declarative way to specify the order in which fetches respond - [please vote if you'd like to see it implemented](https://github.com/wheresrhys/fetch-mock/issues/515).

## Dealing with a 'Black box' that uses fetch

Let's say I have an application that has a loop in the background that repeatedly updates a resource. Nothing in its public APIs gives me access to when a fetch has completed. This can lead to flaky tests as its' not clear when your application's state has been updated and is ready to be examined

fetch-mock's `flush()` method can help with this. It returns a promise that resolves only when each fetch has either reponded successfully or unsuccessfully. Further to this, if you need to wait for a fetch's body to be streamed, you can call `flush(true)`.

While `flush()` is a helpful tool in situations like this, there are some limitations.

1. Your application will most likely do some work with the data it fetched. If any of that is asynchronous you will need to do something additional (such as wait for a small timeout) to ensure it completes before you continue with your test.
2. `flush(true)` will only wait for response bodies to be streamed if your application called the streaming function (`res.json()`, `res.text()` etc) _before_ `flush(true)` was called.

## Mocking fetches for non-text content

fetch can respond with anything that can be sent over http

- `spy()`
- `catch()`
- `sandbox()`
- `matchPartialBody()`
- `sendAsJson: false`
