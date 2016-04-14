
# Promises


Promises are perhaps the most important new feature.

- Lots of 3rd party libraries do this already
- Finally a native implementation
- Used under the hood for a lot of async features

> "A promise is a representation of the eventual result of an async computation"

A promise is always in either one of three states:

[slide illustration: pending -> (fulfilled/rejected) = resolved/settled]

- Pending: the result hasn’t been computed, yet
- Fulfilled: the result was computed successfully
- Rejected: a failure occurred during computation


[Slide: Callback hell http://eng.localytics.com/content/images/2015/04/francois-bg.jpg]

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