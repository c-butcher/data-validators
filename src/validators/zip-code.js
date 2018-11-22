const Validator = require('../validator');
const ValidationError = require('../validation-error');

class ZipCode extends Validator {
    constructor(options) {
        super('zip-code', options);
    }

    validate(code) {
        let errors = [];

        const ZipCodePattern = new RegExp("^[0-9]{5}(?:-[0-9]{4})?$");

        if (!ZipCodePattern.test(code)) {
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
            message: 'Invalid zip code'
        };
    }
}

module.exports = ZipCode;