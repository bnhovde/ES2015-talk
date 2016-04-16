
# Arrow Functions


Arrow functions are function shorthands. If you're a coffescript person this will be familiar.

The main differences between regular old functions and arrow functions are:

- Drop the "function" keyword
- Arrow functions doesn't create a new 'this' context.

Example:

```javascript
{
    // ES5 - Movie plot generator
    
    const plots = [
        'avenge dead wife',
        'use skillset to eliminate threat to nation',
        'save daughter'
    ];
    
    const createMoviePitch = function(plot, actor = 'Liam Neeson') {
        console.log(`${actor} has to ${plot}`);
    };
    
    // Make it rain!
    plots.map( function(plot) {
        return createMoviePitch(plot)
    });
    
};
```

Now, with arrow functions:

Example:

```javascript
{
    
    // ES6 - Movie plot generator
    
    const plots = [
        'avenge dead wife',
        'use skillset to eliminate threat to nation',
        'save daughter'
    ];
    
    const createMoviePitch = function(plot, actor = 'Liam Neeson') {
        console.log(`${actor} has to ${plot}`);
    };
    
    // Make it rain!
    plots.map( (plot) => {
        return createMoviePitch(plot)
    });
    
};
```

Now, with explicit return:

An arrow function will explicitly return single-line statements

Example:

```javascript
{
    
    const plots = [
        'avenge dead wife',
        'use skillset to eliminate threat to nation',
        'save daughter'
    ];
    
    const createMoviePitch = (plot, actor = 'Liam Neeson') => {
        console.log(`${actor} has to ${plot}`);
    }
    
    // Make it rain!
    plots.map( plot => createMoviePitch(plot));
    
    // Same as:
    plots.map( (plot) => {
        return createMoviePitch(plot)
    });

};
```

## Anatomy of an arrow function

```javascript

    // Passing arguments 
    () => { ... }   // no argument
    x => { ... } // one argument
    (x, y) => { ... } // several arguments
    
    // Function bodies
    x => { return x * x }  // block
    x => x * x  // expression, equivalent to previous line
```


## Scope

Arrow functions uses the same 'this' as their parent scope.

Example:

```javascript
{
    // ES5
    function sneeze() {
        
        var self = this;
        
        console.log('ahh.. ahh.. ahh..');
                
        this.choo = function(){
            console.log('CHOO!');
        };

        window.setTimeout( function() {
            self.choo();
        }, 1000);
    }
    
    // ES6
    function sneeze() {
    
        console.log('ahh.. ahh.. ahh..');
                
        this.choo = () => console.log('CHOO!');

        window.setTimeout( () => {
            this.choo();
        }, 1000);
    } 
    

};
```

## Use case: 

- anonymous functions 
- one liners
- when you need 'this' to stay in parent context
