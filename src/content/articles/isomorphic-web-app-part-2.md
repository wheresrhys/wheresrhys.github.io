# Building a React-less isomorphic web app: Part 2 - Choosing a script loader and templating engine

[<- Part 1: What's wrong with React?]()

If you're planning on building an isomorphic web app without React you'll need to use some other library to render your html. Choosing a templating engine is a surprisingly thorny issue. Typically it will have to meet 3 use cases

 - Server side rendering
 - Client side rendering (dev environment)
 - Client side rendering (prod environment)

Server side rendering can be taken as a given for the vast majority of templating engines, but meeting the other two requirements without friction can be problematic. In production you probably want to precompile your templates into a bundle (or few) and load them in with your other scripts. However, in your dev environment this can add quite some overhead, so loading templates on demand is desirable (unless you're prepared to put up with waiting for templates to rebuild on every file change). Template inheritance and partial inclusion may also differ in inconvenient ways between client and server.

Your choice of script loader will probably have an impact on some or all of the above, and if you're tied to your choice of templating engine or script loader, you may have to lower your expectations for your development worklow.

My advice is to set up a small test app which 
 - serves a simple page and a client side script intended to re-render the page
 - implements your intended production and client-side builds
 - makes use of template inheritance and inclusion logic, with templates in a variety of directories
I didn't follow these steps and wasted a lot of time digging around in the hinterland between my code, the script-loader and the templating engine, before concluding the combination I'd chosen wasn't workable. I eventually settled on Nunjucks, which has an impressive array of template loading/compiling options and weighs in at [9.3kb](https://mozilla.github.io/nunjucks/files/nunjucks-slim.min.js), and JSPM, because I wanted to give it a go (though as it typically loads hundreds of scripts in a painfully slow waterfall I may switch to webpack hot-loading).

Once you've found a winning combination of loader and template engine the tricky stuff is done. From now on it's just a matter of writing beautiful, easily maintainable application code. That should be easy (ha ha).

- [Part 1: What's wrong with React?]()
- Part 2: Choosing a script loader and templating engine
- [Part 3: Application Structure]()
- [Part 4: Bootstrapping and routing]()
- [Part 5: Progressive enhancement]()
- [Part 6: Data, state and offline]()
- [Part 7: Wait... where's the framework?]()


## Choice of libraries & tools

- App structure
- [Lack of] framework choice
- Isomorphic and progressively enhancing code



