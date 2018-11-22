# Creating a Validator

### Do Not Sanitize
Validators should not alter the input value in any way, as this would invalidate the results.
Unfortunately, if the original value can't pass the validation constraints without being modified,
then it can't pass the validation constraints.

### Error Formatting
We **strongly** urge you to use the `ValidationError` when returning errors, as it gives
you the added bonus of being able to format your message using placeholders...

```javascript
let error = new ValidationError('Thanks {name}, you got the {beer}!', {
    name: 'Chris',
    beer: 'Lagunitas'
});
```
Now, if you don't want to use the `ValidationError`, you can still return any error object
so long as it has a `message` property.

### Creating the Validator

```javascript
const { Validator, ValidationError } = require('open-data-validators');

class Length extends Validator {

    constructor(options) {
        super('length', options);
    }

    validate(value) {
        let errors = [];
        let isError = false;

        if (value.length < this.options.min) {
            isError = true;
        }

        if (value.length > this.options.max) {
            isError = true;
        }
        
        if (isError) {
            let error = new ValidationError(
                this.options.message,
                this.options
            );
    
            errors.push(error);            
        }
        
        return errors;
    }
}

module.exports = Length;
```