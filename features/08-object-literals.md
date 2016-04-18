
# Enhanced Object Literals

Object literals have been given more functionality with ES6.

- Support for setting prototype on creation
- Shorthands for defining methods


## Setting of prototype

```javascript
{
    
    // ES5
    var Person = function() {
        
        // Methods
        greet = function() {
            console.log('hi!');
        }
    };
    
    Person.prototype.greet = function() {
        console.log('hi!');
    }
    
    Employee.prototype = Object.create(Person.prototype);


    // ES6
    var person = {
        __proto__: person,
        name : 'Chud'
    };

};
```


## Method shorthands

- Object methods now look like methods
- The keyword "function" is no longer necessary.

Example:

```javascript
{

    // ES5
    var person = {
        name: 'Doyle',
        poke: function() { console.log('Stop that!'); },
        greet: function() { console.log('Ahoi-hoi!'); }
    };

    // ES6
    var person = {
        name: 'Doyle',
        poke() { console.log('Stop that!'); },
        greet() { console.log('Ahoi-hoi!'); }
    };

};```


## Computed property names

- Allows you to put an expression in brackets [], that will be computed as the property name

Example:

```javascript
{

   // Computed property names (ES6)
    let i = 0;
    const a = {
        ["foo" + ++i]: i,
        ["foo" + ++i]: i,
        ["foo" + ++i]: i
    };
    
    console.log(a.foo1); // 1
    console.log(a.foo2); // 2
    console.log(a.foo3); // 3

};
```



## Use case: 

For future projects:

- Any string & variable mixing
- Multi-line strings

## Sources

https://github.com/lukehoban/es6features#enhanced-object-literals
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
