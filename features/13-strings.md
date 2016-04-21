# Strings

The string native has been extended with some very useful new features



Example: string.includes()

```javascript
{
      
    // ES5
    console.log('devSouthCoast'.indexOf('Coast') > -1); // true

    // ES6
    console.log('ryanGoslin'.includes('Goblin')); // false
      
}
```
        

Example: string.repeat()

```javascript
{
      
    // ES5
    function repeat(string, count) {
        var strings = [];
        while(strings.length < count) {
                strings.push(string);
        }
        return strings.join('');
    }

    repeat('chill', 3); // 'chillchillchill'


    // ES6
    'go'.repeat(3); // 'gogogo'     
        
}
```            
 
      
## Use case: 
      
future projects:

- When you need string includes & repeat functions.....

## Sources:

https://github.com/DrkSephy/es6-cheatsheet#strings