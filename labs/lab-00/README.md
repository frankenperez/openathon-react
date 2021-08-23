# Lab 00 - JavaScript and React

## Table of Contents

- [What is JavaScript](#what-is-javascript)
- [React. A JavaScript library for building user interfaces](#react.-a-javascript-library-for-building-user-interfaces)
- [Resources](#resources)

## What is JavaScript

<img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" width="175" />

**JavaScript** is one of the most important **programming languages** of all time, not simply because of its [popularity](https://www.tiobe.com/tiobe-index), but also because of its features. JavaScript is a multi-paradigm language, supporting **imperative/procedural** programming along with **OOP** (Object-Oriented Programming) with **prototypal inheritance** and **functional programming**.

It's based on and conforms to **ECMAScript** [specification](https://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf), whose latest version is **ECMAScript 2018**.

JavaScript is an **interpreted language** that needs a **JavaScript Engine** to be executed. There are different engines and each offers a different level of compatibility with the different ECMAScript specifications allowing them to support a certain subset of the JavaScript language:

- [V8](https://developers.google.com/v8/) in Chrome browser and Node.js server.
- [SpiderMonkey](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey) in Firefox browser.
- [Chakra](https://github.com/Microsoft/ChakraCore) in Edge browser/

JavaScript is used not only in **FrontEnd** web applications but in **Hybrid** mobile apps ([Ionic](https://ionicframework.com/), [React Native](http://www.reactnative.com/), etc.) and **BackEnd** applications ([Node.js](https://nodejs.org/), [Express](https://www.express.com/), [Meteor](https://www.meteor.com/), etc.).

### The Two Pillars of JavaScript

#### 1. Prototypal Inheritance

JavaScript's object system is based on **prototypes**, **not classes**. A prototype is a working object instance inheriting directly from other objects. It favors object composition over class inheritance allowing users to create **has-a**, **uses-a** or **can-do** relationships instead of **is-a** relationships established with class inheritance. [More info.](https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9)

#### 2. Functional Programming

It's the process of building software by composing **pure functions**, **avoiding shared state**, **mutable data**, and **side-effects**. It's **declarative** rather than **imperative**, and application state flows through pure functions. This paradigm contrast with Object Oriented Programming, where application state is usually shared and located together with methods in objects. [More info.](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)

## React. A JavaScript library for building user interfaces

![React logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png)

> React = Components + Virtual Dom + JSX + Props & State.

**React** is a modern open-source web development toolkit built by Facebook. React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called _components_.

Dividing web applications up into **components** is a central idea to creating applications with React. Instead of a gigantic monolith of a web page, you will generally consider the individual pieces that make up an application and divide it up into smaller pieces that are much easier to develop, debug, and to generally think about.

### Main Characteristics of React

![React operations](https://developer.ibm.com/developer/default/tutorials/wa-react-intro/images/figure1.png)[Image source](https://www.ibm.com/developerworks/library/wa-react-intro/index.html)

- **Component-based Architecture**

  Applications are built using nested, reusable **components**. Components encapsulate a behavior, a view and a state.

- **Declarative Vs Imperative programming**

  Components react to a change in the application state. Their behavior is defined and a reaction is triggered when one of their properties changes.

- **High Performance, thanks to Virtual DOM**

  When processing changes, React compares the **Virtual DOM** with the DOM to sync and reconcile changes. As a result, the DOM is efficiently and partially updated.

- **JSX**

  React extends the syntax of JavaScript to produce “elements”. **JSX expressions** are similar to HTML, but in reality they become JS functions that evaluate to objects. The resulting elements are stored in memory and not in the DOM.

- **One-way Data Flow**

  Nested components get a snapshot of their state by their parent component, use it according to their defined behavior, and when a state change occurs it's propagated upwards using callbacks. State is propagated downwards in the component hierarchy while changes are propagates upwards.

- **Component Life-cycle**

  React defines the life cycle of components and provide a default implementation; these methods are executed at particular moments of the life cycle, and they can be overridden to run custom code.

## Resources

### You Don't Know JS (book series)

This is a series of books diving deep into the core mechanisms of the JavaScript language. The first edition of the series is now complete.

<a href="http://www.ebooks.com/1993212/you-don-t-know-js-up-going/simpson-kyle/"><img src="https://i2.ebkimg.com/previews/001/001993/001993212/001993212-hq-168-80.jpg" width="75" /></a>&nbsp;
<a href="http://www.ebooks.com/1647631/you-don-t-know-js-scope-closures/simpson-kyle/"><img src="https://i1.ebkimg.com/previews/001/001647/001647631/001647631-hq-168-80.jpg" width="75" /></a>&nbsp;
<a href="http://www.ebooks.com/1734321/you-don-t-know-js-this-object-prototypes/simpson-kyle/"><img src="https://i1.ebkimg.com/previews/001/001734/001734321/001734321-hq-168-80.jpg" width="75" /></a>&nbsp;
<a href="http://www.ebooks.com/1935541/you-don-t-know-js-types-grammar/simpson-kyle/"><img src="https://i1.ebkimg.com/previews/001/001935/001935541/001935541-hq-168-80.jpg" width="75" /></a>&nbsp;
<a href="http://www.ebooks.com/1977375/you-don-t-know-js-async-performance/simpson-kyle/"><img src="https://i0.ebkimg.com/previews/001/001977/001977375/001977375-hq-168-80.jpg" width="75" /></a>&nbsp;
<a href="http://www.ebooks.com/2481820/you-don-t-know-js-es6-beyond/simpson-kyle/"><img src="https://i0.ebkimg.com/previews/002/002481/002481820/002481820-hq-168-80.jpg" width="75" /></a>

### Learning React: Modern Patterns for Developing React Apps

<a href="https://www.amazon.es/Learning-React-Modern-Patterns-Developing/dp/1492051721/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=Learning+React&qid=1628156751&sr=8-1"><img src="https://images-na.ssl-images-amazon.com/images/I/51Kwaw5nInL._SX379_BO1,204,203,200_.jpg" width="75" /></a>

### React Hooks in Action: With Suspense and Concurrent Mode

<a href="https://play.google.com/store/books/details/John_Larsen_React_Hooks_in_Action?id=SDszEAAAQBAJ"><img src="https://books.google.com/books/publisher/content/images/frontcover/SDszEAAAQBAJ?fife=w400-h600" width="75"></a>

### React and Libraries: Your Complete Guide to the React Ecosystem

<a href="https://www.amazon.com/React-Libraries-Complete-Guide-Ecosystem-ebook/dp/B08Y7PQ38C/ref=sr_1_1?dchild=1&keywords=React+and+Libraries%3A+Your+Complete+Guide+to+the+React+Ecosystem&qid=1628154547&s=digital-text&sr=1-1"><img src="https://covers.zlibcdn2.com/covers299/books/df/4e/a0/df4ea0e91ebe357d0204ad52e93f23a3.jpg" width="75" /></a>

[< Home Page](../..) | [Next >](../lab-01)
