# Building a React-less isomorphic web app: Part 3 - Application Structure

[<- Part 2: Choosing a script loader and templating engine]()

In a typical node.js webapp you might split your code into `server` and `client` directories, perhaps with an additional `shared` directory if some code is needed both on the server and the client. In an isomorphic app though `shared` is the new normal and your application structure should change to reflect this.I've been using the following:

```
|_server
  \_ app.js // runs the server
|_webapp
  |_lib // utilities with no direct effect on the DOM
  |_components // can include css, js and templates
  |_pages
    |_article
      \_tpl.html // renders the page content
      \_controller.js // constructs the data to be rendered
    \_index.js // single point of access to controllers for each page
  \_main.js // runs the client side application
  \_layout.html // renders the page scaffolding
```

Later I'll augment this in order to add custom progressive enhancements *on top* of client side rendering and routing (beat that React!). In the next article I'll explain how the bove structure is accessed by client and server side apps.

## So which framework do we use?
Remember, React is not a framework, it's a clever-clogs rendering engine. Swapping it out for a different rendering/templating engine doesn't leave a gaping hole we need to fill with angular or backbone.

There are a [growing number](http://isomorphic.net/libraries) of isomorphic frameworks out there - some of which look pretty neat - but until either 
a) at least one of them gains traction in the js community (on a similar scale to, say, express.js)
b) I come up against a problem I *really* struggle to solve myself
... I'll be far happier avoiding investing time in learning a framework that may become yesterday's news.

## Where to point the web root





## Production build

Depending on your choice of script loader you may need 


The application structure I'm going to propose for an isomorphic webapp is slightly influenced by my choice of JSPM as a script loader


- [Part 1: What's wrong with React?]()
- [Part 2: Choosing a script loader and templating engine]()
- Part 3: Application Structure
- [Part 4: Bootstrapping and routing]()
- [Part 5: Progressive enhancement]() (subhead - Wait... where's the framework?)
- [Part 6: Data, state and offline]()


http://berzniz.com/post/99158163051/isomorphic-javascript-angularjs-is-not-the