const Validator = require('../validator');
const ValidationError = require('formatted-error');

class String extends Validator {

    constructor(options) {
        super('string', options);
    }

    defaults() {
        return {
            required: false,
            contains: {
                match: null,
                insensitive: false
            },
            length: {
                min: null,
                max: null
            },
            message: 'Field must be a string.'
        };
    }

    validate(value) {
        let errors = [];
        let isError = false;

        if (this.options.required && typeof value !== 'string') {
            isError = true;
        }

        if (this.options.length.min || this.options.length.max) {
            errors.push(...this.constructor.check(value, 'length', this.options.length));
        }

        if (this.options.contains.match) {
            errors.push(...this.constructor.check(value, 'contains', this.options.contains));
        }

        if (value !== null && typeof value !== 'string') {
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

module.exports = String;