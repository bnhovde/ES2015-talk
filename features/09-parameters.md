
# Parameters


There's a few new ways of managing parameters in ES6:


## Default Parameters:

Setting default parameters. Similar to destructuring.

Example:

```javascript
{
    const person = {
        name: 'Draco',
        age: 673
    }
    
    const { name = 'Ricardo', height = '180cm' } = person;
    
    console.log(name);      // Draco
    console.log(height);    // 180cm
};
```


## Rest Parameters:

Turns argumets into an array

```javascript
{
    // ES5
    function logEach() {
        var things = Array.prototype.slice.call(arguments);
        things.forEach(function (thing) {
            console.log(thing);
        });
    }
    logEach("a", "b", "c");
    
    // ES6
    function logEach(...things) {
        things.forEach(function (thing) {
            console.log(thing);
        });
    }
    logEach("a", "b", "c");
    
}
```



## Spread Parameters:



```javascript
{

}
```



## Use case: 

For future projects:

- 
