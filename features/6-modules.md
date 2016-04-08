
# Modules


Modules bring module loading to native javaScript.


```javascript
{
    
    // Import entire library
    import libraryName from ('./lib/libraryName');
    
    libraryName.init();
    
};
```


## Importing:

Various ways of importing

```javascript
{
    // Import entire file
    import './lib/lodash';
    
    // Named imports
    import { napoleon, snowball } from ('./lib/animalFarm');
    
    // Import all the things
    import * from ('./lib/animalFarm');
    
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