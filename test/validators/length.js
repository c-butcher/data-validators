const chai = require('chai');
const Validator = require('../../src/validator');

describe('Length Validator', function() {
    it('exists and is accessible', function() {
        chai.assert.isOk(Validator.types().has('length'));
    });

    it('passes when value is within the given length', function() {
        let errors = Validator.check('7 Chars', 'length', {
            min: 5,
            max: 10,
        });

        chai.assert.equal(errors.length, 0);
    });

    it('fails when the value is outside of the given length', function() {
        let errors = Validator.check('This is way longer than 10 characters.', 'length', {
            min: 5,
            max: 10,
            message: 'Length must be in-between {min} and {max}.'
        });

        chai.assert.equal(errors.length, 1);
    });
});