# Web components and Modern Web frameworks

Web Components is an in progress standard, by which you can teach new tricks to HTML. Four different building blocks define Web Components, HTML Templates, Custom Elements, HTML Imports and Shadow DOM.  Just like any other web standard different browsers implement the standard in different point of time, hence we polyfill to bridge today to future. Since web components is future of web, different modern web framework/libraries take web components into consideration and provide some level of support for web components. 
In this session we will review current state of Web Components standard, different browser's support and also current polyfill for web components. We will also review today's big modern web frameworks like Angular 2.0, React, EmberJS and Polymer to see how much support they provide for web components standard. 


Ahmad is senior consultant at Readify, he has more than 16 years of experience working on different development stacks. He has developed a wide range of software including banking and financial systems. His passion is about ALM, Agile and Scrum and mostly spend his time coaching teams become more effective at delivering values.



https://hacks.mozilla.org/2015/06/the-state-of-web-components/

https://www.ag-grid.com/embracing-the-future-with-angularjs2-web-components-and-ag-grid/

https://github.com/franzliedke/ember-webcomponents

https://news.ycombinator.com/item?id=8950360

https://github.com/aurelia/web-components

Good post about custom element and how to test registered custom element in browser
http://www.html5rocks.com/en/tutorials/webcomponents/customelements/

good note about how to start angular2
https://www.reddit.com/r/angularjs/comments/3drklg/should_i_use_typescript_or_vanilla_es6_with/

Typescript deep dive 
https://basarat.gitbooks.io/typescript/content/docs/project/modules.html

Componentization
http://blogs.windriver.com/koning/2006/09/components.html


[ES6 modules with typescript and webpack](http://www.jbrantly.com/es6-modules-with-typescript-and-webpack/)


## Presentation outline

## [Introduction](http://localhost:8080/#/)
My name is Ahmad Atighechi. I am senior consultant working at Readify and today I am going to talk about web component an modern frameworks.

### Background 

In first three slide we talk about background of component.
+ [Slide 1](http://localhost:8080/#/1) I have a question. Does anyone know what this screen shot is?. A turbo vision to find out who is old in the room !
+ But we are not going to talk about old DOS application. We are going to talk about web [Slide 2](http://localhost:8080/#/2).A Visual InterDEV screen shot. 
+ Now lets talk about recent technologies [Slide 3](http://localhost:8080/#/3) twitter bootstarp with nested divs. 
+ [Slide 4](http://localhost:8080/#/3) Why do we need web components? (talk about why this exerience is poor CSS issue). 
+ How does WC help [Slide 5](http://localhost:8080/#/5) Encapsulation and componentization 

### Encapsulation

Why encapsulation

(to be isolate custom defined element from rest of the page) 

Current Encapsulation

iframe

componentization?

Why Componentization

(to be able to break down our monolithic page into manageable component)

Standard?

Web componentst are new sets of W3C web platform standard that extends web platform model in platform itself.
Because the web already have the component model baked in. The DOM 

Shadow DOM

Each element in document can have a shadow root. An element that has a shadow root associated with it is called "shadow host". The shadow root can be treated as an ordinary DOM element so you can append arbitrary nodes to it.


Template 

Basic example 

Does not mean binding

HTML Import

Custom element


Web component today

Polyfill 

Web componentjs

Demo 

WEb frameworks

AngularJS

Demo

Compliance

The Angular.js framework also provides full support for MVC development; its directives are comparable to React’s components. Angular aims to its component compatible with the HTML5 web component standard as well. When the web component standard is fully implemented, transitioning from Angular should be straightforward. Projects that use Angular for MVC will be able to use its other features while gaining the speed of native implementations of components.


Demo

Compliance

If you use WebcomponentJS it is standard compliant 


Otherwise implementation is not a standard, components created this way can only be shared with other applications using React.js. React also still keeps CSS stylesheets separate from the JavaScript component implementations.


Component in React:
	+ Import   

Polymer

Demo

Compliance



QA

ReactJS - Provides an implementation of web components where defining a component effectively declares a render function that returns HTML elements for display. Because the



