# Building a React-less isomorphic web app: Part 1 - What's wrong with React?

I've built a few single page web-apps in the past, but never attempted a progressively enhanced one i.e. the site is functional as html and css, but client-side javascript takes over routing, data handling etc. once it has loaded. Isomorphic javascript offers the ability to achieve this without code duplication by using much the same code on both the client and server. Frustratingly, whenever I've searched for resources on creating such an isomorphic web app the overwhelming majority of results point me in the direction of React... but what if I don't want to use React?

The developers of React are at pains to point out that it's not a *framework* for building a web application; it's a rendering engine which uses a virtual DOM to optimise re-rendering and take the pain out of managing stateful views. My reluctance to use React boils down to it not being a good choice of templating engine for most use cases.

For complex interfaces (such as, funnily enough, facebook) where the page is a view onto a many tiered, deeply interconnected mish-mash of data, React is a powerful too. But I also see React used time and time again for interfaces no more complicated than e.g. selecting an item from a menu reveals an extra panel. This simply does not require the kind of state management and DOM-diffing that underpins React. It adds a sizeable, opinionated black-box to your app, which will more likely than not be less performant (along many metrics) than managing these DOM changes directly. 

Even if I did use it React would not *be* my app; I would still need to make lots of other decisions about the tools I used and the structure of my code. So I decided to put these articles and demos together in order to explore how to build an isomorphic app without React. I'll explain why I chose the libraries I did, but the examples hopefully demonstrate some patterns that can be reused with whatever technology choices you make (even if you choose React).

- Part 1: What's wrong with React?
- [Part 2: Choosing a script loader and templating engine]()
- [Part 3: Application Structure]()
- [Part 4: Bootstrapping and routing]()
- [Part 5: Progressive enhancement]()
- [Part 6: Data, state and offline]()