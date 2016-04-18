
# Promises (polyfill)


Promises are perhaps the most important new feature and important to understand.

- Lots of 3rd party libraries implement promises for a long time
- Node developers have been using them for a long time
- Finally a native implementation
- Used under the hood for a lot of upcoming async features

> "A promise is a representation of the eventual result of an async computation"

That's the 1-line summary of a promise. A more familiar example:

Imagine you go into a cafe and order a coffee. You pay the cashier and they give you a receipt for 1 coffee. That's a promise. You don't have the coffee right away, but you now have a reference to the transaction.

You can now rely on the fact that in a few moments you'll either have your coffee, or if they're out of coffee you'll be told so and can handle that when it happens.

Meanwhile you can focus on other stuff..


## Why are they needed?

We've created many ways of dealing with async code before promises. They were usually callbacks, which can get ugly real fast.

[Slide: Callback hell http://eng.localytics.com/content/images/2015/04/francois-bg.jpg]


Example: Async functions without promises

```javascript
{
    // ES5
    func1(function (value1) {
        func2(value1, function (value2) {
            func3(value2, function (value3) {
                func4(value3, function (value4) {
                    // Do something with value 4
                });
            });
        });
    });
    
    // ES6
    func1(value1)
        .then(func2)
        .then(func3)
        .then(func4, value4 => {
            // Do something with value 4
        });
}
```
    
## Promise states    

A promise is always in either one of three states:

[slide illustration: pending -> (fulfilled/rejected) = resolved/settled]

- Pending: the result hasn’t been computed, yet
- Fulfilled: the result was computed successfully
- Rejected: a failure occurred during computation


## Creating a promise

Example: Creating a promise 1/2

```javascript
{
    // Promise creation 
    promise = new Promise(function(resolve, reject) {});
    
}```

- The promise constructor takes one argument, a callback with two parameters, resolve and reject. 
- Running new Promise will immediately call the function passed in as an argument. 


Example: Creating a promise 2.2

```javascript
{
    var promise = new Promise(
        function (resolve, reject) {
            
            // Do something async here!
            setTimeout( function(){
                
                if (/* async successful? */) {
                    resolve(value); // success
                } else {
                    reject(reason); // failure
                }
            }, 1000);
        }
    );
}
```

- Next, do something within the callback, perhaps async.
- Then call resolve if everything worked, otherwise call reject.


Example: Using promise

```javascript
{
    promise.then(function(result) {
        // process result
    }, function(err) {
        // handle error
    });
}
```

## Chaining: 

- .then() is the most important method
- accepts two arguments (Both are optional, can add a callback for the success or failure case only)
- then always returns a new promise

```javascript
{
    // Basic usage
    .then(successFn, errorFn)

    // Chaining
    getSomeData()
        .then(filterTheData)
        .then(processTheData)
        .then(displayTheData);
}
```

## Promise.all: 

- Returns a promise which resolves when all of it’s argument promises have resolved
- Or: is rejected when any of it’s argument promises are rejected

```javascript
{

    Promise.all(promiseArray).then(function(resultsArray) {
        //...
    });
    
    // Example:
    Promise.all([
        queryUserToken(),
        queryUserDetails()
    ]).then(function() {
        renderProfiles();
    });
}
```

## Error handling

- Easier than in callback pyramids
- Promises are implemented to allow a single channel for errors
- Better than using .then(errorFn)

> "keep your Promise chains flat with a trailing .catch() to properly handles errors" 
> - http://www.datchley.name/promise-patterns-anti-patterns/

```javascript
{

    // Chaining
    getSomeData()
        .then(doSomething)
        .then(doSomethingElse)
        .catch(function(err) {
            // handle all errors
        });
}
```


## Use case: 

- Working with async data
- Concurrent async requests
- REST etc

## Sources:

http://www.2ality.com/2014/10/es6-promises-api.html
http://slides.com/signupskm/ecmascript-6-the-next-generation#/11
http://www.html5rocks.com/en/tutorials/es6/promises/
https://github.com/mattdesl/promise-cookbook
https://github.com/getify/You-Dont-Know-JS/blob/master/async%20&%20performance/ch3.md
https://github.com/DrkSephy/es6-cheatsheet#promises
http://www.datchley.name/promise-patterns-anti-patterns/