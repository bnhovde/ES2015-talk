
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
    function getDailyJoke() {
        fetch('http://joke.org', {}).then( response => {
            return response.body.joke;
        })
    }
    
    // Sync function
    function sayJoke() {
        const joke = getDailyJoke();
        console.log(joke); // undefined
    }
}
```

Async await allows us to write synchronous code that is actually asynchronous.

By marking the parent function as async and the asyc operation with await, js will stop execution internally until the async operation has finished. 

Example: Utopia: Async functions

```javascript
{
    // Promise
    function getFirstUser() {
        return getUsers().then(function(users) {
            return users[0].name;
        });
    }
    
    // Async await
    async function getFirstUser() {
        let users = await getUsers();
        return users[0].name;
    }
}
```
        

Example: Reworked function 1

```javascript
{
    // Async function
    function getDailyJoke() {
        fetch('http://joke.org', {}).then( response => {
            return response.body.joke;
        })
    }
    
    // Sync function
    async function sayJoke() {
        let joke = await getDailyJoke();
        console.log(joke); // What's blue and smelly? Grandpa smurf!
    }
}
```


## Sources:

https://medium.com/@bluepnume/learn-about-promises-before-you-start-using-async-await-eb148164a9c8#.7ngedlmbe