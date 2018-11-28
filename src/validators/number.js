const Validator = require('../validator');
const ValidationError = require('formatted-error');

class Number extends Validator {

    constructor(options) {
        super('number', options);
    }

    defaults() {
        return {
            required: false,
            range: {
                min: null,
                max: null,
                message: 'Field must be in-between {min} and {max}'
            },
            message: 'Field must be a number.'
        };
    }

    validate(value) {
        let errors = [];
        let isError = false;

        if (this.options.required && typeof value !== 'number') {
            isError = true;
        }

        if (this.options.range.min || this.options.range.max) {
            errors.push(...this.constructor.check(value, 'range', this.options.range));
        }

        if ((typeof value === 'object' || typeof value === 'function') && value !== null) {
            isError = true;
        }

        if (value !== null && typeof value !== 'number') {
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

module.exports = Number;