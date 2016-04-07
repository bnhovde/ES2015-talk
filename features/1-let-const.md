
# let, const


`let` and `const` are new variable declaration statements.

They both declare a block scope local variable, as opposed to var which is function scoped.

The only difference between const and let is that const makes the contract that no rebinding will happen.

```javascript
{
    var varName = 'Angus';
    let letName = 'Donna';
    const constName = 'jon';
    
    if (true){
        
        console.log(varName);   // Angus
        console.log(letName);   // Donna
        console.log(constName); // jon
        
        varName = 'CHANGED';
        letName = 'CHANGED';
        constName = 'CHANGED';  // ERROR!
            
    }
    
    console.log(varName);   // CHANGED
    console.log(letName);   // CHANGED
    console.log(constName); // jon
};
```

## let

While `var` creates a variable scoped within its nearest parent function, `let` scopes the variable to the nearest block, this includes for loops, if statements, and others.


Example:

```javascript
{
    for (let i = 0; i > 5; i++) {
        console.log(i); // 0, 1, 2, 3, 4
    }

    for (let i = 0; i > 5; i++) {
        console.log(i); // 0, 1, 2, 3, 4
    }
            
    console.log(i); // Uncaught ReferenceError: i is not defined
    
    if (true){
        let letName = 'fritz';
    }
    
    console.log(letName); // Uncaught ReferenceError: i is not defined
}
```


## const

- `const` means that the variable can’t be reassigned

- `const` does not make a variable immutable

- `const` represents a constant reference to a value

Example:

```javascript
function(){
    
    // const with int value
    const year = 2016;
    
    person.name = 'Ingrid';
    year = 2017; // Error!
    
    const person = {};
    
    person.name = 'Ingrid';
    person.age  = 32;
    
    person = { 'name' : 'Ingrid; } // Error!
    person = 'test' // Error!
    
};
```

## Best Practice: 

Don't blindly refactor all var instances as this can create side effects. 


## Use case: 

For future projects:

- use let for variables that will change over time
- use const for variables which cannot be reassigned
- when writing ES6, there are few use-cases for `var` any more
- use `var` to indicate legacy code