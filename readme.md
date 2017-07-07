#Node Express React Redux Template


The Nerr stack. Held together by webpack and babel. Doesn't quite have a ring to it...

This template is a collection of boilerplate for node.js single page (or at least single-package) applications. The aim is to create a clear and consistent schema while also ensuring flexibility and reusability for as much of development as is possible.

##Installation

clone to desktop.  
npm i  
npm run build  
npm run start  


##What is this?

After minimal reseach on the subject, it became apparent that according to at least three random people on the internet node.js was not particularly good at handling large-scale concurrent code on the server. These no fewer than three then summerised that it was best for predominantly client-side web apps, with the server serving only to provide the client bundle and any API endpoints only.

They seemed pretty wise so this is what the server does.

The client code rather loosly implements the redux philosophy, using the store for persistent data changes, but using react object state for temporary information such as text fields. Ostensibly for performance reasons.


###Why would I use this?

It might save you a lot of time.

Webpack and babel configuration, whilst rather simple, can take quite a while, especially if someone has decided to depricate certain path features or restructure packages.

Some of the client boilerplate can also be time consuming or tedious, and wouldn't it be easier to just use a template?

The real reason though, is the intial setup. express-generator is alright, but it is more designed with getting a bare-bones up and running, as opposed to a scalable web app. With this you already have a scalable directory strucutre, basic webpack/babel configuration, and a basic schema to follow for development.

But that is just my opinion.

###Updates

As this is a template for personal node.js apps, updates will happen infrequently, but it would be fantastic if you see a dependancy which needs updating and either file an issue or just fork me. 

Generally updates will only be for dependancies.

Please,  
Enjoy.


