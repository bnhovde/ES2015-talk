
# for-of

- Like for-in, but returns object, not index.



Example: Async functions without promises

```javascript
{
    // ES5
    var sum1 = 0;
    var arr1 = [1, 2, 3];

    for (var index in arr1) {
        sum += arr1[index]; 
    }

    // ES6
    let sum2 = 0;
    let arr2 = [1, 2, 3];

    for (let value of arr2) {
        sum += value;
    }
    
    // Strings
    let iterable = "boo";

    for (let value of iterable) {
        console.log(value);
    }
    // "b"
    // "o"
    // "o"
}
```


## Use case: 

For future projects:

- Iterating over objects and arrays

## Sources:

http://odetocode.com/blogs/scott/archive/2015/01/20/the-for-of-loop-in-es6.aspx
