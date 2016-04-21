
# Async Await (ES2017)

Synchronous code is generally easier to understand and write because everything executes in the order in which it is written.

- Write syncronous code, make it act asynchronous
- Relies on promises (ES6 core function mentioned earlier)
- functions in exactly the same way as calling `.then()` on a promise
- simply pauses execution of a method until the value from the promise is available.


Example: async vs sync

```javascript
{
    // Async function
    function getStarship() {
        return fetch('https://swapi.co/api/starships/9/').then( response => {
            return response.json().name;
        })
    }

    // Sync function
    function printStarship() {
        const starship = getStarship();
        console.log(starship);
    }

    printStarship(); // undefined
    
}
```

Async await allows us to write synchronous code that is actually asynchronous.

By marking the parent function as async and the asyc operation with await, js will stop execution internally until the async operation has finished. 

Example: Reworked function 1

```javascript
{
    // Async function
    function getStarship() {
        return fetch('https://swapi.co/api/starships/9/').then( response => {
            return response.json().name;
        })
    }

    // Async await function
    async function printStarship() {
        const starship = await getStarship();
        console.log(starship);
    }

    printStarship(); // Death Star
}
```

Example: Same problem solved with promises

```javascript
{
    // Promise
    function getDailyJoke() {
        fetch('http://joke.org', {}).then(function(response) {
            return response.body.joke;
        });
    }
    
    // Async await
    async function getDailyJoke() {
        let response = await fetch('http://joke.org', {});
        return response.body.joke;
    }
}
```


## Sources:

https://medium.com/@bluepnume/learn-about-promises-before-you-start-using-async-await-eb148164a9c8#.7ngedlmbe