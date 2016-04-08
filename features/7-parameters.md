
# Parameters


There's a few new ways of managing parameters in ES6:


## Default Parameters:

Setting default parameters. Similar to destructuring.

```javascript
{
    // Import entire file
    function (a, b) {
        return a + b;
    }
    
}
```


## Exporting:

Various ways of exporting

```javascript
{

    // Named Exports
    export let name = 'Bård';
    
    export function add(a, b) {
        return a + b;
    }
    
    // Exporting a list of objects/functions  
    export { name, add };
}
```



## Best Practice:

Exports go at the bottom of the file

```javascript
{

    // Named Exports
    console.log('string text line 1\n\ string text line 2');
    
    // ES6
    console.log(
        `string text line 1
        string text line 2`
    );  
}
```



## Use case: 

For future projects:

- Module dependencies