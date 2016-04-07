
# blocks


A common use of `Immediately Invoked Function Expressions` is to enclose values within its scope. 

In ES6, we now have the ability to create block-based scopes and therefore are not limited purely to function-based scope.

```javascript
{
    (function () {
        var secret = 'Soylent green is people!';
    }());
    
    console.log(secret); // Reference Error
    
    {
        let secret = 'Bush faked the moon landing';
    }
    
    console.log(secret); // Reference Error
    
};
```


## Hoisting: 

http://www.sitepoint.com/joys-block-scoping-es6/


## Use case: 

For future projects:

- use let for variables that will change over time
- use const for variables which cannot be reassigned
- when writing ES6, there are few use-cases for `var` any more