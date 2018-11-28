const chai = require('chai');
const Validator = require('../../src/validator');
const String = require('../../src/validators/string');
const Length = require('../../src/validators/length');
const Contains = require('../../src/validators/contains');

describe('String Validator', function() {

    before(() => {
        Validator
            .add('length', Length)
            .add('contains', Contains);
    });

    it('passes when value is null and not required', function() {
        let string = new String({
            required: false
        });

        let errors = string.validate(null);

        chai.assert.equal(errors.length, 0);
    });

    it('passed when value is not required and is null', function() {
        let string = new String({
            required: false
        });

        let errors = string.validate(null);

        chai.assert.equal(errors.length, 0);
    });
});