
# Template Strings


Template strings allow you to mix strings, variables and functions.


```javascript
{

    // ES5
    var person = {
        name: 'Jon Snow',
        status = 'dead'
    }
    
    console.log('I\'m pretty sure that ' + person.name + ' is ' + person.status);
    
    // ES6
    const person = {
        name: 'Jon Snow',
        status = 'alive'
    }
    
    console.log(`I've read somewhere online that ${person.name} is ${person.status}`);
    
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