const Validator = require('../validator');
const ValidationError = require('formatted-error');

class Contains extends Validator {
    constructor(options) {
        super('contains', options);
    }

    defaults() {
        return {
            match: null,
            insensitive: false,
            message: 'Property must contain {match}'
        };
    }

    validate(value) {
        let errors = [];
        let isError = false;

        if (!this.options.match) {
            throw new ValidationError('Match option must contain a value.');
        }

        if (this.options.insensitive) {
            this.options.match = this.options.match.toLowerCase();
        }

        if (typeof value === 'number') {
            value = value.toString();
        }

        if (typeof value === 'string') {
            if (this.options.insensitive) {
                value = value.toLowerCase();
            }

            isError = !value.match(this.options.match);
        }

        if (Array.isArray(value)) {
            if (this.options.insensitive) {
                value = this.arrayValuesToLowerCase(value);
            }

            isError = value.includes(this.options.match);
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

    arrayValuesToLowerCase(array) {
        return array.map(value => value.toLowerCase());
    }
}

module.exports = Contains;