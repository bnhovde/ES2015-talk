# Classes

- simple sugar over the prototype-based OO pattern


Example: Syntax

```javascript
{
    // Basic syntax     
    class className  {
        
        // Constructor
        constructor() {}
        
        // Method
        methodName(){}
        
        // Super call
        super.superMethod();
    }
      
}
```


Example: Creating a class

```javascript
{
    // ES5
    function Person(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }

    Person.prototype.greet = function () {
        return 'Greetings, I am ' + this.name + '!';
    };
    
    var cindy = new Person('Cindy', 98, 'klingon');
    console.log(cindy.greet()); // Greetings, I am Cindy!
   
   
    // ES6
    class Person {
        constructor(name, age, species) {
            this.name = name;
            this.age = age;
            this.species = species;
        }

        greet() {
            return 'Greetings, I am ' + this.name + '!';
        }
    }
    
    const cindy = new Person('Cindy', 98, 'klingon');
    console.log(cindy.greet()); // Greetings, I am Cindy!
      
}
```

## Sources:

https://github.com/DrkSephy/es6-cheatsheet#strings