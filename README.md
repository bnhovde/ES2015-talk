# ES2015 In Production

!!! This is a very WIP document of an upcoming ES6 talk.

Contains rough notes for a possible transcript + source code for demo & examples.

Slides will be located [here](https://slides.com/bardhovde/es2015/) when completed.

__

## Talk Proposal

#### What is the talk about? – What will it mainly cover?
The talk is about ES6, the "new" version of ECMAscript. It will cover the new features, provide tips on getting started and will also cover some ES7/ES8 features.

#### Who is it for?
The talk is for anyone interested in the current state of JavaScript in 2016. Some prior js knowledge is recommended.

#### What will people (hopefully) learn from it?
- If you use JavaScript in your daily workflow, you will hopefully see something you can take away and use in your production environment.
- If you're already using ES6, then a refresher on all the features will hopefully come in handy.
- If you're a JavaScript hater then I'm sure there'll be things here to fuel your fire.

#### What’s unique about this talk?, or: Why should I watch it?
I'll try to cover the material in an intuitive way. I won't go too deep, but deep enough to show how it's all connected. Hopefully I'll give you a broad understanding of the JavaScript ecosystem as a whole.

__

## Outline

* Introduction
    * About me 
    * About the talk
    * Goals for the talk
* Agenda
* JavaScript in 2016
    * Fatigue
    * Bower
    * npm
    * web assembly
* ES6/2015
    * Stages
    * Sugar
    * browser support
* Babel   
* New features
    * let, const
    * destructuring
    * arrow functions
    * blocks
    * Template strings
    * Modules
    * Parameters
    * Enhanced Objects
    * Promises
    * for of
    * Object.assign
    * Classes
    * Enhanced object literals
    * Generators (basics)
* Getting started with Babel
* Updating ES5 library
* ES7/2016 and beyond
    * Observables
    * Async await (ES8/2017)
* Final thoughts
    * CTA's
    * Q&A

______

## Transcript

    Legend:
    
    [Slide: name] = Slide indicator;
    !DEMO = Demo indicator;
    (TIME: 60) = Timing indicator;
    * -> = Key words/summary
    

## Introduction

* -> Welcome, thanks for coming
* -> Personal intro (name/role)
* -> X is the name of talk. Not sexy. Surprised show up.
* -> Talk intro (ES6, "new" features, put them into practice and benefit from)
* -> Realized, after proposing talk, ES6 = huge. Worried about length.
* -> Q: Using ES6 today? In production?
* -> For you = refresher. Tell me if miss stuff.

---

> [Slide: Intro]

Hi all, thanks for coming.

My name is Bård, I’m a Front-End Developer working at CDD, we’re a small digital agency.

I’m here to talk about ES6. About the "new" features and how to put them into practice and benefit from them.

"ES6 in production" is the name of the talk.

When I suggested doing this talk back in December I remember thinking that it'd be a quick and easy talk to put together. I'd been using ES6 in a couple of projects and felt like I had a pretty good grasp of the basics.

When it came time to start writing the talk I realized how little of ES6 I was using. There's SO much there. I knew it was big but as I kept discovering new features I started to worry about the length of this talk.

* Q: How many of you are using ES6 today?
* Q: How many of you are using ES6 in an actual product? So a production website or an app etc?

Ok, so for you[the ones that do], this will be more of a refresher. And please shout if I miss something!


--

## Goals

* -> Javascript: where it is, where it's going
* -> ES6 - very large - focus on beneficial features.
* -> Lots of primitives for library builders, might not see unless actively look
* -> What's next? Upcoming features - ES2016

---

These are the goals of this talk.

> [Slide: Goals]

Firstly, I'd like everyone to leave feeling like they have a full understanding of where JavaScript is right now and where it's going. 

Then there's the new features. There's a ton of them. ES6 is a beast.

I'll primarily focus on the ones that will most likely benefit you. A lot of the new features are primitives primarily for people that build libraries on top of, so you might not ever see unless you actively go looking.

Because of the amount of new stuff, I don't expect - unless you know all of the features already - that you'll rememeber everything I cover here today.

All I want you to do is, (as I go through the features), think about they would fit in with your workflow and in your code, and then make a mental note of them.

Lastly, if you absolutely hate JavaScript then I’m sure there’ll be things I show you here that’ll really fuel your hatred to new levels.

I'll also touch on this year's release - "ES2016" - and other upcoming features if there's time.

So!

__

## About me

* -> Personal intro
* -> FED since ~2010. Lots of time reading. Like sharing knowledge.
* -> Name, meaning, 
* -> S: Home town. Middle of norway. South of the wall.
* -> S: Home town. House.
* -> S: Pick axe.
* -> S: Tourist attraction. Play cards right = train to concert hall.
* -> Enough about me..

---

> [Slide: About me]

Who am I, and how am I qualified to be here talking to you all? Good question.

I've been a front-end developer since around 2010. I spend an unhealthy amount of time reading about this stuff, and I love sharing knowledge, which is why I'm here.

> [Slide: Name]

My name is pretty unusual, and before this talk I went online to try and find the meaning of it for you. Here's the down-low.

> [Slide: Map]

This is where I'm from. In the middle of norway (but south of the wall).

> [Slide: Map 2]

You could actually drive there. It'd take you 23 hours via a ferry from Denmark.

> [Slide: Folldal]

This is my home town. That's my house (just joking)

> [Slide: pickaxe]

Folldal used to be a mining town, so that's a big one in front of the council.

> [Slide: train]

Now it's a tourist attraction, and if you play your cards right you get to go on a train into the mines...

> [Slide: concert hall]

..where there's a concert hall.

Anyway, that's plenty about me I think. Let's get to it.

______

## Agenda

* -> JS2016, ES6
* -> Browser support & Babel
* -> New features (biggest part), then break
* -> S: Features. Cover.
* -> S: Order. Final exams. (grenade)
* -> S: Keep awake, drift off 20 min, riveting stuff. Spiced it up!
* -> Quiz slides, demo


---

> [Slide: Agenda]
    
This is the agenda. I'm first gonna talk about the state of JavaScript in 2016.

I'll then talk about how ES6 fits into this, about browser support and run through Bbabel.

The biggest part of the talk will be going through ES6 and the new features. 

Then after the break I'll show you a JavaScript library I've written without ES6, and then I'll implement ES6 to demonstrate use cases.

Finally I'll go through some upcoming features.

> [Slide: list of features - show order]

Like I said, I was worried about how to keep you focused through all of this material? I mean, I think it's pretty riveting stuff, but I would probably be drifting off too after 20 minutes of theory, so I've tried to spice it up a little..

Sprinkled in with the rest of the slides I've added "Surprise quiz slides". When one of those pop up, the first person to shout the answer wins some candy. The questions aren't javaScript related, and you're allowed to google or bing or whatever you want to do.

Let's try one out now. Ready?

> [Slide: quiz slide]

All right then. Let's get on with the talk.

______

## JavaScript in 2016

* -> Chaotic place. "JS Fatigue", "Tooling fatigue"
* -> S: folder. Config files.
* -> S: React/redux back to single state tree
* -> S: Tweet
* -> S: Bower, things shift towards npm. npm3 = flat
* -> S: npm implosion.

---

The JavaScript ecosystem in 2016 is a pretty chaotic place. There's lots of articles written on this. You've probably heard phrases like "JavaScript fatigue" or "tooling fatigue" being used, and rightly so.

> [slide: https://twitter.com/iamdevloper/status/702464176954875904]

If you've tried setting up a modern js JavaScript stack from scratch in the last year you've probably felt some of this pain. Have a look at this. 

> [Slide: showing folder] 

This is the root folder of a very popular Redux/React "starter kit".

The amount of config and dotfiles are staggering. What do they all do? If you're just starting out with JavaScript in 2016 you're in for a rough start.



So what else has happened in 2016?


> [slide: bower]

Bower might be on it's way out as more and more things shift towards npm and node land. The Angular team has announced that Angular 2 will be distributed through npm, so there'll be no official bower package for Angular 2.

Then there was the recent npm incident that sparked a shitstorm. 

> [slide: npm1]
> [slide: npm2]
> [slide: npm3]


If you missed that one, there was some dispute over a package name on npm.

We don't want to go back to having one monolithic library doing everything like jQuery, but we also don't want our library to rely on 200 000 modules. I think we'll end up somewhere in the middle.

> [Slide: https://twitter.com/iamdevloper/status/712574452697989120]

What we got out of it was a better unpublishing rules from npm.

...

______

## ES6/2015

* -> ES6 landed turbulent time, so much else to learn
* -> ES6: not all or nothing. Not like framework.
* -> ES6: adopt features as you learn
* -> Naming acronyms. Clear this up!
* -> S: ES6 = big. 6 years.
* -> New yearly schedule
* -> Browser updates, smaller releases.
* -> Once learned ES6, less daunting

---

So why am I talking about this? What does it have to do with ES6? Well, I think ES6 landed in a turbulent time, and although it brings a lot of good things I think a lot of people are holding off because there's so much else to learn.

It's not an all-or-nothing deal. As long as you're transpiling you can adopt features one at a time. You don't have to read the full spec before you start writing ES6.

If you adopt a new framework then you can't just pick and mix like this, so it's quite nice to be able to slowly adopt features as you see fit.

There's so many naming conventions and acronyms out there. ES6, ES2015, ES.next Harmony.. I'd like to attempt to clear this up, hopefully this won't just confuse you more.

> [Slide: names]

* LiveScript - First name of js, before Sun got involved and renamed it to javaScript.(Somewhat of a marketing move at the time, with Java being very popular around then)
* ECMA - international standard body, adopted the API
* ECMAScript - ECMA's official API
* javaScript - One implementation of ECMAscript
* VBScript - Another implementation of ECMAscript
* JScript - Another implementation of ECMAscript
* ActionScript - Another implementation of ECMAscript
* Harmony - Progress bucketed after ES5.1/4 split
* TC39 - committee put together by ECMA to progress in the language (technical committee number 39).
* ES.next - when the committee’s working on the next API, this is what they call it
* ES2015 - Released in June 2015. First release for 6 years. 
* ES2016 - Upcoming release
* ES2017 - Upcoming release
* ES2 - ECMAScript version 2 (1998)
* ES3 - ECMAScript version 3 (1999)
* ES4 - Never saw the light of day
* ES5 - ECMAScript version 5 (2009)
* ES6 - Released in June 2015. First release for 6 years.
* ES7 - No such thing. See ES2016.
* ES8 - No such thing. See ES2017.


The ES6 spec was finalised by the TC39 committee in June 2015, after 6 years or work.

> [Slide: It's big!]

6 years is a lot, so ES6 is big. It's way too big, which is why after ES6 TC39 has decided to do adopt yearly releases, hencey the new naming convention.

This is good for a few reasons:

- We don't have to wait for 6 years for new features
- Browsers should adopt faster
- Once you're on top of ES6, then hopefully future releases will seem less daunting.

__

### The Spec process

* -> jsjabber episode - TC39, challenges.
* -> S: Quotes

---

There's a jsjabber episode that I keep pushing on people titled [The future of JavaScript](https://devchat.tv/js-jabber/168-jsj-the-future-of-javascript-with-jafar-husain). In it, Jafar Husain talks about TC39 and the challenges of designing js by comittee.

He covers it much better than I can hope of doing here now, but let me show you a couple of quotes that I think summarises it:

>  One of the things the committee really focuses on, and this is something that's been really healthy, is primitives.

> We're looking not necessarily to innovate. We're looking to find what people are really doing out there on the web. We're looking to enable them to build features themselves.


### Stages

* -> Good time to go through stages
* -> D: Stages link
* -> Feature, champion, stage 4 = release

---

I think now is a good time to briefly run through the stages a new feature has to go through before it makes it into the spec.

> !stages

External link: [ecmascript stages](https://github.com/tc39/ecma262#ecmascript)

Each ecmascript feature has to go through several stages before it makes it into the spec. As you can see, each feature has a champion responsible for pushing it through.

With the new yearly releace cycle, features that has made it to stage 4 will be included in the release that year, which is a good way of doing it.

> [Slide: Quiz Slide]
__

### "Syntactical sugar"

* -> Criticism, sugar
* -> Coffescript, (ES6 owes lots), also sugar
* -> Nothing wrong! 
* -> Better dev experience, less code
* -> Cognitive load, less to reason about
* -> default params, destricturing = less boilerplate

---

I've seen a lot of comments on how many of the ES6 features are "Syntactical sugar" on top of ES5.

Coffeescript, which by the way we owe a lot of ES6's refinements to, is also "sugar".

What's wrong with sugar? If the end goal is Readable code and a better developer experience, then sugar is good!

I want less cognitive load when I look at some code. As I'll show you when I go through the features the amount of code needed to do the same thing in ES5 and ES6 is quite staggering.

With ES6, things like default parameters and destructuring will eliminate the need for a lot of the "boilerplate" code we write with each module or function.

__

### browser support

* -> Patchy. IE11, Safari
* -> nodejs
* -> S: Table
* -> Babel to the rescue!

---

Browser support for ES6 is a little patchy. most modern browsers have good coverage, but IE11 and Safari are tailing a little.

Demo: [http://kangax.github.io/compat-table/es6](http://kangax.github.io/compat-table/es6)

That's okay though, we've got babel.


______

## Babel

* -> use the ES6, 7 and 8 features you want today. 
* -> Q: Use babel? Build step js?
* -> Some features transpiled, others babel-polyfill
* -> Worried about transpiling? 
* -> Debugger, source maps, not that different
* -> Worth the hassle? Less code, more fun!
* -> Demo: Babel stages
* -> Demo: .babelrc

> [Demo: https://babeljs.io/#es2015]

---

Babel allows you to use the ES6, 7 and 8 features you want today. 

> Q: How many of you use babel today?
> Q: How many of you have some kind of build step for your javascript? Minification? Linting etc? 

Babel transpiles modern js features into ES5. How does it work? Magic..

- Some features are transpiled to ES5 via syntax transformers
- More complex features are polyfilled with `babel-polyfill`

If you're a little worried about transpiling, I hear you.

My biggest worry when I added transpiling to my build step was debugging. I use the chrome debugger all the time, and the last thing I wanted was for that experience to change. Luckily, with babel and source maps, the debugging experience doesn't change THAT much. Although the code output is different to the input, it's still very similar, and the debugger works. 

I've been using ES6 through babel for every project I could for the last year or so, and although I've experienced certain bugs there's been no deal breakers.

Is it worth the hassle? The overall developer experience I feel is better. My code is smaller, mostly due to the syntactical sugar we talked about.

> !demo babel - point out stages

With babel you can enable the stages you want, even stage 0 features.


______

## New features

* -> Demo each feature

> [image of features]

    * let, const
    * destructuring
    * arrow functions
    * blocks
    * Template strings
    * Modules
    * Parameters
    * Enhanced Object Literals
    * Promises
    * for of
    * Object.assign
    * Classes
    

(TIME: 60)

______


## Getting setup with babel

* -> Fitting babel in your workflow
* -> npm scripts
* -> .babelrc
* -> build example

---

Babel transpiles ES6 into ES5. It's also got a polyfill that will allow you to use features that can't be polyfilled so easily.

> !demo .babelrc

Configuring babel is done through the babelrc file. Yep, another config file.

`npm run build`


______

## Updating ES5 library

* -> Created app, american electiorate system. 
* -> Written in ES5. Update!

---

> !DEMO = show app

I've created a simple app that simulates the american election system. I know you're not supposed to mix politics and tech talks, but this is a fictional election. Any resemblence to real people is absolutely coincidental.

Anyway, like I said earlier, the module is written in ES5, and as I go through the new features I'll dive in and update the app to use the new features.

> !DEMO = update app

______

## ES7/2016 and beyond

* -> Upcoming features
* -> Show Features
* -> Web assembly. Ann in june by Eich. Low level bunary compile target.
* -> JS - difficult place. comp target + easy to work with for humans
* -> WASM - Heavy duty applicaitons and games
* -> WASM - Not writing actual language
* -> JS - Keep growing

---

> [slide: the future]

All right, I want to talk about some upcoming features. Some of them are pretty cool.

First of all, let's talk about ES2016, or ES7 as it would have been named with the old system.

Remember when I said yearly releases would be smaller? Well..

### ES2016

> [slide: ES2016]

    * Array.prototype.includes
    * Exponentiation Operator

That's it.

### Web Assembly

> [slide: web assembly]

Web assembly was first announced in June by Brendan Eich (js papa).

It's low-level binary compile format for the web platform.

I'm by no means an expert, but from what I understand:

- Web assembly = compilation target for other languages.
- To be used for heavy lifting. Games, video editing etc.

> WebAssembly fills in the gaps that would be awkward to fill with JavaScript.

> [slide: web assembly & js chart]

JavaScript is currently in a difficult position, being both a compiler target and also easy to work with for humans.

Web Assembly levels the web playing field by being a great compilation target for other languages.

I can see it being used for heavy duty applicaitons and games in the future, but I don't think people will be writing web assembly.


### Other upcoming ES features


    * Observables
    * Async await (ES8/2017) Hot!
    
    
    
    
    
______
    
## Final thoughts

* -> worth it? I think so.
* -> new js, and less code is better. Less room for error.
* -> Type script
* -> not all or nothing
* -> Compilers never go away
* -> Benefits
* -> Words of caution
* -> Quotes
* -> Final quote

---

    * CTA's
    * Q&A
    
Is it worth it? I think so. This is the new js, and less code is better. Less room for error.

- Adoption will happen (type script - already es6)
- Not an all-or-nothing deal
- Compilers aren’t going away

Simple benefits:

- No more `self = this` (arrows)
- Less data validation in functions (default parameters)
- End of callback hell (promises)
- Super-easy object value extraction (destructuring)

Words of caution:

- Prepare for some pain
- Concern about amount of features = more to learn?
- Good quote:

> When uncertain, chances are you probably should default to ES5 and older syntax instead of adopting ES6 just because you can. 

> By this I don’t mean that using ES6 syntax is a bad idea – quite the opposite, see I’m writing an article about ES6! My concern lies with the fact that when we adopt ES6 features we must do it because they’ll absolutely improve our code quality, and not just because of the "cool factor" – whatever that may be.

> -- Nicolás Bevacqua - ponyfoo.com

Don't get fatigued! Keep it simple!

Final quote:

> "There are only two kinds of languages: the ones people complain about and the ones nobody uses" -- Bjarne Stroustrup



______

## Refrences & Useful resources

* [Getting started with webpack and React, ES6 style](http://humaan.com/getting-started-with-webpack-and-react-es6-style/)
* [Sugar &amp; Spice and everything nice about ES6 (Nodevember 2015)](http://benmvp.github.io/slides/nodevember2015-es6.html#/)
* [Read Understanding ECMAScript 6 | Leanpub](https://leanpub.com/understandinges6/read/#leanpub-auto-what-is-destructuring)
* [ECMAScript 6: arrow functions and method definitions](http://www.2ality.com/2012/04/arrow-functions.html)
* [ES6 Overview in 350 Bullet Points](https://ponyfoo.com/articles/es6)
* [How to Learn ES6 — JavaScript Scene — Medium](https://medium.com/Javascript-scene/how-to-learn-es6-47d9a1ac2620#.od9ifudrb)
* [DrkSephy/es6-cheatsheet](https://github.com/DrkSephy/es6-cheatsheet)
* [ericelliott/class-free-Javascript-style: JavaScript Style Guide](https://github.com/ericelliott/class-free-Javascript-style#references)
* [es6-cheatsheet.pdf](http://www.benmvp.com/slides/devweek2016-es6.html#/)
* [Sweet ES6 (Developer Week 2016)](http://www.benmvp.com/slides/devweek2016-es6.html#/1)
* [es6 cheatsheet at DuckDuckGo](https://duckduckgo.com/?q=es6+cheatsheet&ia=answer&iax=1)
* [Exploring ES6: Upgrade to the next version of JavaScript](http://exploringjs.com/)
* [Choosing Vanilla JavaScript in 2016](https://medium.com/vanilla-Javascript/choosing-vanilla-Javascript-in-2016-6f38a8302ee5#.wk5xe8fsq)
* [https://kpdecker.github.io/six-speed/](https://kpdecker.github.io/six-speed/)
* [Welcome | ReactJS Program](http://courses.reactjsprogram.com/courses/es6forreact/lectures/816795)
* [How to prepare and write a tech talk](http://wunder.schoenaberselten.com/2016/02/16/how-to-prepare-and-write-a-tech-conference-talk)
* [2ality - Arrow functions](http://www.2ality.com/2012/04/arrow-functions.html)
* [Ewan Valentine - ES6 is beautiful](http://ewanvalentine.io/es6-is-beautiful/)
* [Sitepoint - Block scoping in es6](http://www.sitepoint.com/joys-block-scoping-es6/)
* [Mikael Brevik - Destructuring presentation](http://git.mikaelb.net/presentations/bartjs/destructuring)

## Credits

<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

##### Used for best practices & examples

* https://github.com/lukehoban/es6features
* https://github.com/airbnb/javascript
* https://github.com/addyosmani/es6-equivalents-in-es5
* https://github.com/DrkSephy/es6-cheatsheet