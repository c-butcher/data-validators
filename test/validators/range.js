const chai = require('chai');
const Validator = require('../../src/validator');

describe('Range Validator', function() {
    it('exists and is accessible', function() {
        chai.assert.isOk(Validator.types().has('range'));
    });

    it('passes when value is within the range', function() {
        let errors = Validator.check(50, 'range', {
            min: 0,
            max: 100,
        });

        chai.assert.equal(errors.length, 0);
    });

    it('fails when the value is outside of the range', function() {
        let errors = Validator.check(500, 'range', {
            min: 0,
            max: 100,
            message: 'Range must be within 0 and 100.'
        });

        chai.assert.equal(errors.length, 1);
    });
});