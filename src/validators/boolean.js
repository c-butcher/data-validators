const Validator = require('../validator');
const ValidationError = require('formatted-error');

class Boolean extends Validator {

    constructor(options) {
        super('boolean', options);
    }

    defaults() {
        return {
            required: false,
            message: 'Value must be a boolean.'
        };
    }

    validate(value) {
        let errors = [];
        let isError = false;

        if (typeof value !== 'boolean') {
            isError = true;
        }

        if (this.options.required && !value) {
            isError = true;
        }

        if (isError) {
            errors.push(new ValidationError(
                this.options.message,
                this.options
            ));
        }

        return errors;
    }
}

module.exports = Boolean;