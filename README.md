# Open Data Validators


### Using the Validator Service

We have a validation service that helps to manage and execute the wide range
of validators that we have. You can get the service by requiring it from our module...  

```javascript
const { Validator } = require('open-data-validators');
```

With the `Validator` service we can `check()` the value below to make sure that
it meets our `zip-code` validator. Since the value `123` does not meet the standard
five to nine digit zip code, our check will return a `string[]` array containing
the errors.


```javascript

/**
* @type {string[]}
*/
let errors = Validator.check(123, 'zip-code');

console.log(errors); // ['Invalid zip code']
```

### Executing a Validator Directly
You can get a specific validator using the `Validator.get(name, options)` method. 
```javascript
const { Validator } = require('open-data-validators');

let range = Validator.get('range', {
    min: 0,
    max: 100,
    message: 'Range must be in-between {min} and {max}'
});

let errorsOne = range.validate(50);
let errorsTwo = range.validate(250);
```

You can also create the validator directly yourself by getting it from our module...
```javascript
const { Range } = require('open-data-validators');

let range = new Range({
    min: 0,
    max: 100,
    message: 'Range must be in-between {min} and {max}'
});

let errorsOne = range.validate(50);
let errorsTwo = range.validate(250);
```
