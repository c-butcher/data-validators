const ValidationError = require('../src/validation-error');

let validators = new Map();

class Validator {

    constructor(name, options = {}) {
        if (this.constructor === Validator) {
            throw new ValidationError('Abstract class Sanitizer cannot be called directly.');
        }

        if (typeof this.validate !== 'function') {
            throw new ValidationError('Abstract class Validator must implement a validate() method.')
        }

        if (typeof options !== 'object') {
            throw new ValidationError('Options argument must be an object.');
        }

        let defaults = this.defaults();
        if (typeof defaults !== 'object') {
            throw new ValidationError('Validators defaults() method must return an object.');
        }

        this.name = name;
        this.options = Object.assign(defaults, options);
    }

    /**
     * Returns the default options for this validator.
     *
     * @returns {{message: string}}
     */
    defaults() {
        return {
            message: 'Invalid value'
        };
    }

    /**
     * Adds a validator type to the list of available validators.
     *
     * @param {string} name
     * @param {function} validator
     */
    static add(name, validator) {
        if (typeof name !== 'string') {
            throw new ValidationError('Name argument must be a string.');
        }

        if (typeof validator !== 'function') {
            throw new ValidationError('Validator argument must be a function that implements OpenData.Schema.Field.Validator.');
        }

        validators.set(name, validator);

        return this;
    }

    /**
     * Check whether a validator type exists.
     *
     * @param {string} name
     *
     * @returns {boolean}
     */
    static has(name) {
        return validators.has(name);
    }

    /**
     * Returns a fully configured validator ready to start checking values.
     *
     * @param {string} name
     * @param {object} options
     *
     * @returns {Validator}
     */
    static get(name, options = {}) {
        if (typeof name !== 'string') {
            throw new ValidationError('Name argument must be a string.');
        }

        if (!validators.has(name)) {
            throw new ValidationError("Validator '{name}' not found.", {
                name: name,
            });
        }

        const ValidatorType = validators.get(name);

        let validator = new ValidatorType(options);
        if (!(validator instanceof Validator)) {
            throw new ValidationError("Validator '{name}' must implement the abstract Validator class.", {
                name: name,
            });
        }

        return validator;
    }

    /**
     * Checks to make sure a value meets specific criteria.
     *
     * @param {*} value
     * @param {string} type
     * @param {object} options
     *
     * @returns {*}
     */
    static check(value, type, options = {}) {
        let validator = this.get(type, options);
        return validator.validate(value);
    }

    /**
     * Returns all of the validators types.
     *
     * @returns {Map<string, function>}
     */
    static types() {
        return new Map(validators);
    }
}

module.exports = Validator;
