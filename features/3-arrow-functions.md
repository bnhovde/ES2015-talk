
# Arrow Functions


Arrow functions are function shorthands. If you're a coffescript person this will be familiar.

The main differences between regular old functions and arrow functions are:

- Drop the "function" keyword
- Arrow functions doesn't create a new 'this' context.

Example:

    {
        const monsters = [
            'frankenstein',
            'the thing',
            'inventor of ...'
        ]
        
        monsters.map( function(animal) {
            
        });
        
        
    };

Now, with arrow functions:

Example:

    {
        const person = {
            name: 'Tim Samson',
            features: {
                face: 'round',
                arms: 'sort',
                hair: false
            }
        }
        

    };

You can use destructuring for other things too.


## Function parameter destructuring

Useful when you only care about certain parameters

Example:

    {
        const menu = {
            appetiser: 'flea soup'
            mains: 'locust eggs'
            dessert: 'goblin sorbet'
        }
        
        function orderDessert({dessert}){
            console.log('Can I please have a bucket of ' + dessert + ', please?');
        }
        
        orderDessert(menu); // Can I please have a bucket of goblin sorbet, please?
        
    };


## Implicit return

If one line, returns whatever on that line (no return statement needed)

Example:

    {
        const person = {
            name: 'Draco',
            age: 673
        }
        
        const { name = 'Ricardo', height = '180cm' } = person;
        
        console.log(name);      // Draco
        console.log(height);    // 180cm
    };



## Use case: 

- anonymous functions 
- one liners
