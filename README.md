# Data Validators

![Build Status](https://travis-ci.com/c-butcher/data-validators.svg?branch=master)
![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)

### Installation

```bash
> npm install --save data-validators 
```

### Using the Validator Service

We have a validation service that helps to manage and execute the wide range
of validators that we have. You can get the service by requiring it from our module...  

```javascript
const { Validator } = require('data-validators');
```

With the `Validator` service we can `check()` the value below to make sure that
it meets our `range` validator. Since the value `123` is outside of the 0 - 100 range,
our validator will throw an error.


```javascript
let errors = Validator.check(123, 'range', {
    min: 0,
    max: 100,
    message: 'Value must be in-between {min} and {max}'
});

console.log(errors); // outputs: ['Value must be in-between 0 and 100']
```

### Executing a Validator Directly
You can also get and execute a single validator from our module...

```javascript
const { Range } = require('data-validators');

let range = new Range({
    min: 0,
    max: 100,
    message: 'Range must be in-between {min} and {max}'
});

let errors = range.validate(250); // outputs: ['Range must be in-between 0 and 100']
```
