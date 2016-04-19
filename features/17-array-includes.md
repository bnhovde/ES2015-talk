
# Array.prototype.includes (ES2016)

An extra method on the Array prototype:

Example: Async functions without promises

```javascript
{
    Array.prototype.includes(value : any) : boolean
    
    
    // Example
    ['a', 'b', 'c'].includes('a'); // true
    
    ['a', 'b', 'c'].includes('d'); // false
    
    
    // Almost the same Async
    ['a', 'b', 'c'].indexOf('a') >= 0
    
    // But not quite
    [NaN].includes(NaN) // true
    [NaN].indexOf(NaN)  // -1
}
```

## Sources:

http://www.2ality.com/2016/02/array-prototype-includes.html