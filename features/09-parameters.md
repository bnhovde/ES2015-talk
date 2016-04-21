
# Parameters


There's a few new ways of managing parameters in ES6:

- Default parameters (already covered)
- Rest parameters
- Named Parameters


## Rest Parameters

Turns arguments into an array, useful for handling indefinite arguments.

```javascript
{
    const arguments = ['test', 'test2', 'okay', 2, {}, null];
    
    // ES5
    function printAllArguments1() {
        for (var i=0; i < arguments.length; i++) {
            console.log(arguments[i]);
        }
    }
    
    // ES6
    function printAllArguments2(...things) {
        things.forEach( thing => {
            console.log(thing);
        });
    }
    
    printAllArguments1(); // → test, test2, okay, 2, {}, null
    printAllArguments2(); // → test, test2, okay, 2, {}, null
    
}
```

## Spread operator

"A better apply"

```javascript
{
    var args = [0, 1, 2];
    function myFunction(x, y, z) { }
    
    // ES5
    myFunction.apply(null, args);
    
    // ES6
    myFunction(...args);
    
    // Or even
    myFunction(...[1,2,3]);
    
}
```



## Named Parameters

Useful for options objects

```javascript
{

    // ES5
    function startNewGame(options) {
        var playerName = options.name || 'player';
        var gameLevel  = options.level  || 1;
        // ...
    }

    // ES6
    function startNewGame({ name = 'player', level = 1}) {
        // ...
    }
}
```



## Use case: 

For future projects:

- Options/settings conf objects
- Unknown number of arguments

## Sources:
https://github.com/DrkSephy/es6-cheatsheet#parameters
