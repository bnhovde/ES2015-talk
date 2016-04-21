
# Refactor

* let, const

* Object.assign - options
```
settings = Object.assign(defaults, userOptions);
```
* destructuring
```
const { id, title, images: { cover }, meta: { releaseYear } } = movie;
```
* templates
* default parameters
```
const getInfo = function(movieId = 1){
    return settings.data.find( movie => parseInt(movie.id, 10) === parseInt(movieId, 10)  );    
}
```
* method shorts (return)