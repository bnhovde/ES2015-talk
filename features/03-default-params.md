
# Default parameters


Allows parameters to be given a default value.

Example: 

```javascript
{
    function add(x=0, y=0) {
        return x + y;
    }
    
    add(); // 0
    add(1); // 1
    add(2, 3); // 5
};
```

Example: Use case

```javascript
{

    // ES5
    var datingProfile = function(name, interests) {
        
        if (name === undefined) { 
            name = 'John';
        }
        
        if (interests === undefined) { 
            interests = 'most forms of data processing';
        }
        
        console.log('Hi, I\'m ' + name + ', and I like ' + interests);
    };
    
    datingProfile(); // Hi, I'm John, and I like most forms of data processing
    datingProfile('Tammy'); // Hi, I'm Tammy, and I like most forms of data processing
    
    // ES6
    const datingProfile = function(name = 'Sal', interests = 'eels') {
        console.log(`Hi, I'm ${name}, and I like ${interests}`);
    };
    
};
```



## Use case: 

For future projects:

- Use to remove boilerplate