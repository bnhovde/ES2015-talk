
# Promises


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
    var request = new XMLHttpRequest();
        request.open('GET', 'https://spreadsheets.google.com/feeds/list/1PPrpfJEg', true);
        
    request.onload = function() {

    };
    
    request.onerror = function() {

    };
    
    request.send();       
}
```
        

A promise is always in either one of three states:

[slide illustration: pending -> (fulfilled/rejected) = resolved/settled]

- Pending: the result hasn’t been computed, yet
- Fulfilled: the result was computed successfully
- Rejected: a failure occurred during computation



Example: Creating a promise

```javascript
{
    var promise = new Promise(
        function (resolve, reject) {
            
            // Do something async here!
            var allGood = true;

            if (allGood) {
                resolve(value); // success
            } else {
                reject(reason); // failure
            }
        }
    );
}
```

- The promise constructor takes one argument, a callback with two parameters, resolve and reject. 
- Do something within the callback, perhaps async.
- Then call resolve if everything worked, otherwise call reject.

Example: Using promise

```javascript
{
    promise.then(function(result) {
        console.log(result);
    }, function(err) {
        console.log(err);
    });
}
```

## Chaining: 

- .then() is the most important method
- accepts two arguments (Both are optional, can add a callback for the success or failure case only)
- then always returns a new promise

```javascript
{

    // ES5
    console.log('string text line 1\n\ string text line 2');
    
    // ES6
    getSomeData()
    .then(filterTheData)
    .then(processTheData)
    .then(displayTheData);
}
```



## Use case: 

For future projects:

- Any string & variable mixing
- Multi-line strings

## Sources:

http://www.2ality.com/2014/10/es6-promises-api.html
http://slides.com/signupskm/ecmascript-6-the-next-generation#/11
http://www.html5rocks.com/en/tutorials/es6/promises/
https://github.com/mattdesl/promise-cookbook
https://github.com/getify/You-Dont-Know-JS/blob/master/async%20&%20performance/ch3.md