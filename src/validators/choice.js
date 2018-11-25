const Validator = require('../validator');
const ValidationError = require('../validation-error');

class Choice extends Validator {

    constructor(options) {
        super('choice', options);
    }

    validate(value) {
        let errors = [];

        if (!Array.isArray(this.options.values)) {
            throw new ValidationError('Values option must be an array.');
        }

        // When doing an insensitive search, convert everything to lowercase
        if (this.options.insensitive) {
            value = value.toLowerCase();
            this.options.values = this.options.values.map(
                option => option.toLowerCase()
            );
        }

        // There is no error when the value is in the list of acceptable values.
        let isError = !this.options.values.includes(value);

        // Okay, sometimes there is an error when the value is in the list.
        // This is in the very rare case a person wants to throw an error when
        // the value matches.
        if (this.options.errorOnMatch) {
            isError = !isError;
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

    defaults() {
        return {
            values: [],
            insensitive: false,
            errorOnMatch: false,
            message: 'Value must be in {values}'
        };
    }
}

module.exports = Choice;