const Validator = require('../validator');
const ValidationError = require('../validation-error');

class Length extends Validator {

    constructor(options) {
        super('length', options);
    }

    validate(value) {
        let errors = [];

        if (value.length < this.options.min) {
            let error = new ValidationError(
                this.options.message,
                this.options
            );

            errors.push(error);
        }

        if (value.length > this.options.max) {
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