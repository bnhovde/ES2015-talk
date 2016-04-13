
# Object method shorthands / Concise Object Methods


Template strings allow you to mix strings, variables and functions.


```javascript
{

    // ES5
    var person = {
        name: 'Doyle',
        poke: function() { console.log('Stop that!'); },
        greet: function() { console.log('Ahoi-hoi!'); }
    };

};
```


## Multi-line strings: 

No more newline characters:

```javascript
{

    // ES5
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

- Any string & variable mixing
- Multi-line strings