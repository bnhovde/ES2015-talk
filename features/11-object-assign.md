
# Object.assign (polyfill)

- works like jquery extend

Example: Syntax and simple usage

```javascript
{
    // Syntax
    Object.assign(targetObj, source, source2, source3);
    
    const o1 = { a: 1 };
    const o2 = { b: 2 };
    const o3 = { c: 3 };

    const newObj = Object.assign(o1, o2, o3);
    console.log(newObj); // { a: 1, b: 2, c: 3 }
    
}
```
        

Example: Real-world use case

```javascript
{
    function UIModal(userOptions) {

        const DOM;
        const defaults = {
            modal: '.js-modal',
            openBtn: '.js-modal-btn',
            closeBtn: '.js-modal-close-btn',
            overlay: '.js-modal-overlay',
            showOverlay: true
        };

        // Combine defaults with passed in options
        const settings = Object.assign(defaults, userOptions);
        
        // ...
    }
}
```

## Use case: 

For future projects:

- Config objects
- Combining objects

## Sources:

http://www.2ality.com/2014/01/object-assign.html
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
