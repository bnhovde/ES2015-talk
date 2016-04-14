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
* ES6/2015
* browser support
* Babel   
* Approach
* New features
    * let, const
    * destructuring
    * arrow functions
    * blocks
    * Template strings
    * Modules
    * Parameters
    * Object method shorthands / Concise Object Methods
    * Promises
    * for of
    * Object.assign
    * Classes
    * Object literals
* Useful patterns
    * Replacing IIFEs with Blocks
* 3rd party libraries?
* ES7/2016 and beyond
    * Observables
    * Async await (ES8/2017)
* Final thoughts
    * CTA's
    * Q&A

______

## Transcript

    Legend:
    
    [bracketed contents] = Slide indicator;
    !DEMO = Deno indicator;
    (TIME: 60) = Timing indicator;
    

## Introduction

- 

Hi all, thanks for coming.

My name is Bård, I’m a Front-End Developer working at CDD, we’re a small digital agency.

I’m gonna be talking primarily about ES6 today. About the "new" features and how to put them into practice and benefit from them.

> Q: How many of you are using ES6 today?
> Q: And how many of you are ...

I'll also touch on ES7 and even 8 if there’s time.

My goal here today is that you all go away knowing more than you do now, maybe see something you like and can take and put into your product or hobby project.

I'd like everyone to leave feeling like they have a full understanding of where JavaScript is right now and where it's going. 

Lastly, if you absolutely hate JavaScript then I’m sure there’ll be things I show you here that’ll fuel your hatred even more.

So!

__

### About me

Who am I, and how am I qualified to be here talking to you all? Good question.

I've been a front-end developer since 2010. I spend an unhealthy amount of time reading about this stuff, and I love sharing knowledge, which is why I'm here.

Like I said, my name is Bård. That's a fairly common Norwegian name, and I remember thinking before moving to the UK, what will they make of my name? Would they know any other Bårds?

Turns out that.. No, I'm the only one.

Then a few years later I found out that you can just pick an english name that sounds like yours and I was furious.

On the plus side though, if you ever hear someone talk about some weird foreign guy named bart or board or something.. That's me! There is no way that's anyone else!

Anyway, that's plenty about me I think. Let's get to it.

______

## Agenda

    * JavaScript in 2016
    * ES6
    * browser support
    * Babel
    
> [Agenda]
    
This is the agenda. I'm first gonna talk about the state of JavaScript in 2016.

The biggest part of the talk will be going through ES6 and the new features. 

> [list of features]

There's a lot of them, so I'll primarily focus on the ones that will most likely benefit you. A lot of these are very low level features primarily for people that build libraries, so you might not ever see unless you actively go looking.

Before I go through the features I'll show you a JavaScript library I've written without ES6, and as I tick off the features I'll implement these into the ES5 library to demonstrate use cases.

When I was writing this talk I realized there's so much material here. How am I going to keep you focused through all of this material? I mean, I think it's pretty riveting stuff, but I would probably be drifting off too after 30 minutes of theory, so I've tried to spice it up a little..

Sprinkled in with the rest of the slides I've added "Surprise quiz slides". When one of those pop up, the first person to shout the answer wins some candy. The questions aren't javaScript related, and you're allowed to google or bing or whatever you want to do.

Let's try one out now. Ready?

> [quiz slide]

All right then. Let's get on with the talk.

______

## JavaScript in 2016

The JavaScript ecosystem in 2016 is a pretty chaotic place. There's lots of articles written on this. You've probably heard phrases like "JavaScript fatigue" or "tooling fatigue" being used, and rightly so.

If you've tried setting up a modern js JavaScript stack from scratch in the last year you've probably felt some of this pain. Have a look at this. 

[> slide showing folder] 

This is the root folder of a very popular Redux/React "starter kit".

The amount of config and dotfiles are staggering. What do they all do? If you're just starting out with JavaScript in 2016 you're in for a rough start.

> [slide: https://twitter.com/iamdevloper/status/702464176954875904]


I remember starting out learning react and setting up a pretty basic ...

So what else has happened in 2016? 

> [slide: bower]

Bower has died. Well, kind of. The Angular team has announced that Angular 2 will be distributed through npm, so there'll be no official bower package for Angular 2.

> [slide: npm]

Then there was the recent npm incident that sparked a shitstorm. 

If you missed that one, there was some dispute over a package name on npm.

We don't want to go back to having one monolithic library doing everything like jQuery, but we also don't want our library to rely on 200 000 modules. I think we'll end up somewhere in the middle.

> [Slide: https://twitter.com/iamdevloper/status/712574452697989120]

What we got out of it was a better unpublishing rules from npm.

So why am I talking about this? What does it have to do with ES6? Well, I think ES6 landed in a turbulent time, and although it brings a lot of good things I think a lot of people are holding off because there's so much else to learn.

It's not an all-or-nothing deal. As long as you're transpiling you can adopt features one at a time. You don't have to read the full spec before you start writing ES6.

If you adopt a new framework then you can't just pick and mix like this, so it's quite nice to be able to slowly adopt features as you see fit.

...

______

## ES6/2015

Okay, so ES6 has been officially "out" for close to a year now.

There's so many naming conventions and acronyms out there. ES6, ES2015, ES.next Harmony.. I'd like to attempt to clear this up, hopefully this won't just confuse you more.

> [Slide: names]

* ECMA - international standard body, adopted the API
* ECMAScript - ECMA's official API
* javaScript - One implementation of ECMAscript
* VBScript - Another implementation of ECMAscript
* JScript - Another implementation of ECMAscript
* ActionScript - Another implementation of ECMAscript
* LiveScript - First name of js, before Sun got involved and renamed it to javaScript.(Somewhat of a marketing move at the time, with Java being very popular around then)
* Harmony
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

> [It's big!]

6 years is a lot, so ES6 is big. It's way too big, which is why after ES6 TC39 has decided to do adopt yearly releases, hencey the new naming convention.

This is good for a few reasons:

- We don't have to wait for 6 years for new features
- Browsers should adopt faster
- Once you're on top of ES6, then hopefully future releases will seem less daunting.

__

### Stages

I think now is a good time to briefly run through the stages a new feature has to go through before it makes it into the spec.

> !stages

External link: [ecmascript stages](https://github.com/tc39/ecma262#ecmascript)

Each ecmascript feature has to go through several stages before it makes it into the spec. As you can see, each feature has a champion responsible for pushing it through.

With the new yearly releace cycle, features that has made it to stage 3 will be included in the release that year, which is a good way of doing it.

I remember reading this blog post called idomatic es6 with a great section on what happens when a new version of javaScript is released: 

> In April, the ES6 spec reached its final draft. Later this month, the Grand Council of Javascript Elders will shuffle into the silver sanctum to seal the document with unicorn wax. A glass bell will ring in the spire of the tallest tower in the City and leprechauns will be dispatched to carry the good news to the farthest corners of the Kingdom. ‘ES5 is dead, long live ES6!’ they shout.

> [Quiz Slide]
__

### "Syntactical sugar"

I've seen a lot of comments on how many of the ES6 features are "Syntactical sugar" on top of ES5.

Coffeescript, which by the way we owe a lot of ES6's refinements to, is also "sugar".

What's wrong with sugar? If the end goal is Readable code and a better developer experience, then sugar is good!

I want less cognitive load when I look at some code. As I'll show you when I go through the features the amount of code needed to do the same thing in ES5 and ES6 is quite staggering.

With ES6, things like default parameters and destructuring will eliminate the need for a lot of the "boilerplate" code we write with each module or function.

__

### browser support

Browser support for es6 is a little patchy. most modern browsers have good coverage, but IE11 and Safari are tailing a little.

nodejs

External link: [http://kangax.github.io/compat-table/es6](http://kangax.github.io/compat-table/es6)


That's okay though, we've got babel.


______

## Babel

Babel transpiles modern js features into ES5. How does it work? Magic..

This allows you to use the ES6, 7 and 8 features you want today. 

> Q: How many of you use babel today?
> Q: How many of you have some kind of build step for your javascript? Minification? Linting etc? 

If you're a little worried about transpiling, I hear you.

My biggest worry when I added transpiling to my build step was debugging. I use the chrome debugger all the time, and the last thing I wanted was for that experience to change. Luckily, with babel and source maps, the debugging experience doesn't change that much. Although the code output is different to the input, it's still very similar, and the debugger works. 

I've been using ES6 through babel for every project I could for the last year or so, and although I've experienced certain bugs there's been no deal breakers.

Is it worth the hassle? The overall developer experience I feel is better. My code is smaller, mostly due to the syntactical sugar we talked about.

> !demo babel - point out stages

With babel you can enable the stages you want, even stage 0 features.

> !demo .babelrc

Configuring babel is done through the babelrc file. Yep, another config file.

______

## Approach

> !DEMO = show app

I've created a simple app that simulates the americal election system. I know you're not supposed to mix politics and tech talks, but this is a fictional election. Any resemblence to real people is absolutely coincidental.

Anyway, like I said earlier, the module is written in ES5, and as I go through the new features I'll dive in and update the app to use the new features.

(TIME: 30)

______

## New features

> [image of features]

    * let, const
    * destructuring
    * arrow functions
    * blocks
    * Template strings
    * Modules
    * Parameters
    * Object method shorthands / Concise Object Methods
    * Promises
    * for of
    * Object.assign
    * Classes
    * Object literals
    

(TIME: 60)

______


## Useful patterns

    * Functional

______

## 3rd party libraries?


______

## ES7/2016 and beyond

    * Observables
    * Async await (ES8/2017)
    
______
    
## Final thoughts

    * CTA's
    * Q&A
    
Is it worth it? I think so. This is the new js, and less code is better. Less room for error.

Words of caution:

> When uncertain, chances are you probably should default to ES5 and older syntax instead of adopting ES6 just because you can. 

> By this I don’t mean that using ES6 syntax is a bad idea – quite the opposite, see I’m writing an article about ES6! My concern lies with the fact that when we adopt ES6 features we must do it because they’ll absolutely improve our code quality, and not just because of the "cool factor" – whatever that may be.

> -- ponyfoo guy

Don't get fatigued! Keep it simple!

______

## Useful resources and sources

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