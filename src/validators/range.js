const Validator = require('../validator');
const ValidationError = require('formatted-error');

class Range extends Validator {

    constructor(options) {
        super('range', options);
    }

    validate(value) {
        let errors = [];
        let isError = false;

        if (typeof value === 'string') {
            value = parseFloat(value);

            if (isNaN(value)) {
                errors.push(new ValidationError(
                    this.options.message,
                    this.options
                ));

                return errors;
            }
        }

        if (value instanceof Date) {
            value = value.getTime();
        }

        if (typeof value !== 'number') {
            errors.push(new ValidationError(
                this.options.message,
                this.options
            ));

            return errors;
        }

        if (typeof this.options.min === 'number' && value < this.options.min) {
            isError = true;
        }

        if (typeof this.options.max === 'number' && value > this.options.max) {
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

module.exports = Range;