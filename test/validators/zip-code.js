const chai = require('chai');
const { Validator, ValidationError } = require('../../main');

describe('Zip Code Validator', function() {
    it('exists and is accessible', function() {
        chai.assert.isOk(Validator.types().has('zip-code'));
    });

    it('passes when value is five digits', function() {
        let errors = Validator.check(95670, 'zip-code', {
            message: 'Zip Code is not valid.'
        });

        chai.assert.equal(errors.length, 0);
    });

    it('passes when value is nine digits', function() {
        let errors = Validator.check("95670-1234", 'zip-code', {
            message: 'Zip Code is not valid.'
        });

        chai.assert.equal(errors.length, 0);
    });

    it('fails when the value is less than five digits', function() {
        let errors = Validator.check(123, 'zip-code', {
            message: 'Zip Code is not valid.'
        });

        chai.assert.equal(errors.length, 1);
    });

    it('fails when the value is more than five and less than nine digits', function() {
        let errors = Validator.check("95670-123", 'zip-code', {
            message: 'Zip Code is not valid.'
        });

        chai.assert.equal(errors.length, 1);
    });
});