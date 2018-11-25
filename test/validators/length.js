const chai = require('chai');
const Length = require('../../src/validators/length');

describe('Length Validator', function() {
    it('passes when value is within the given length', function() {
        let length = new Length({
            min: 5,
            max: 10,
        });

        let errors = length.validate('7 Chars');

        chai.assert.equal(errors.length, 0);
    });

    it('fails when the value is outside of the given length', function() {
        let length = new Length({
            min: 5,
            max: 10,
        });

        let errors = length.validate('This is way longer than 10 characters.');

        chai.assert.equal(errors.length, 1);
    });
});