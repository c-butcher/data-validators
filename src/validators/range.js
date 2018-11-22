const Validator = require('../validator');
const ValidationError = require('../validation-error');

class Range extends Validator {

    constructor(options) {
        super('range', options);
    }

    validate(value) {
        let errors = [];

        if (value < this.options.min) {
            let error = new ValidationError(
                this.options.message,
                this.options
            );

            errors.push(error);
        }

        if (value > this.options.max) {
            let error = new ValidationError(
                this.options.message,
                this.options
            );

            errors.push(error);
        }

        return errors;
    }
}

module.exports = Range;