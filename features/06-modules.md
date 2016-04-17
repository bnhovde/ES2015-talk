
# Modules


ES6 Modules bring module loading to native javaScript.

JavaScript has had modules for a long time. However, they were implemented via libraries, not built into the language.

The syntax is very similar to CommonJS.


```javascript
{

    /**
     * CommonJS (Node)
     */
    var _ = require('lodash');
    _.join(['a', 'b', 'c'], '~'); // → 'a~b~c'
    
    
    /**
     * AMD (RequireJS)
     */
    define(['lodash'] , function (_) {
        return function () {
            _.join(['a', 'b', 'c'], '~'); // → 'a~b~c'
        };
    });

    
    /**
     * ES6 modules
     */
    import _ from 'lodash';
    _.join(['a', 'b', 'c'], '~'); // → 'a~b~c'
    
};
```


## Importing/Exporting


Example: Basic Import/export

```javascript
{
    // --- animalFarm.js --- //
    
    // Named imports
    export const napoleon = {
        species = 'pig',
        speak() => { console.log('Four legs good, two legs bad'); }
    };
    
    export const boxer = {
        species = 'horse',
        speak() => { console.log('I will work harder'); }
    };


    // --- main.js --- //

    // Named imports
    import { napoleon, snowball } from 'animalFarm';
    
    napoleon.speak();
    boxer.speak();
    
    // Import all the things
    import * as animalFarm from 'animalFarm';
    
    animalFarm.napoleon.speak();
    animalFarm.boxer.speak();
    
}
```

## Exporting

There are two kinds of exports: 

- named exports (several per module)
- default exports (one per module)

Example: Default exports (one per module)

```javascript
{
    // --- helpers.js --- //
    
    // Default exports
    
    var helpers = {
        generateRandom: function() {
            return Math.random();    
        },
        sum: function(a, b) {
            return a + b;
        }
    };

    export default helpers;


    // --- main.js --- //

    import helpers from 'helpers';
}
```


## Best Practice:

To use modules today you need some sort of bundler like browserify or webpack.


## Quote from "ES6 module loading: More complicated than you think"

There will be a point in the future where ES6 modules are the dominant JavaScript file type and script files are left only on legacy applications, and at that point, it's likely that tools will default to assuming that files are modules. 

In the meantime, we're going through a difficult adolescence between scripts and modules where mixing the two is going to be a bit painful.


## Use case: 

For future projects:

- Module dependencies with a bundler

## Sources:

https://www.nczonline.net/blog/2016/04/es6-module-loading-more-complicated-than-you-think/