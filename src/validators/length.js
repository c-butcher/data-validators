const Validator = require('../validator');
const ValidationError = require('../validation-error');

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