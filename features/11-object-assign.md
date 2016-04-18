
# Object.assign (polyfill)



Example: Syntax and simple usage

```javascript
{
    // Syntax
    Object.assign(target, source_1, ..., source_n);
    
    
    
    
}
```
        

Example: Real-world use case

```javascript
{
    export default function UIModal(userOptions) {

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

- 
- 
- 



## Use case: 

For future projects:

- Any string & variable mixing
- Multi-line strings

## Sources:

http://www.2ality.com/2014/01/object-assign.html