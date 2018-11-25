const chai = require('chai');
const ZipCode = require('../../src/validators/zip-code');

describe('Zip Code Validator', function() {

    it('passes when value is five digits', function() {
        let zipcode = new ZipCode();

        let errors = zipcode.validate(95670);

        chai.assert.equal(errors.length, 0);
    });

    it('passes when value is nine digits', function() {
        let zipcode = new ZipCode();

        let errors = zipcode.validate('95670-1234');

        chai.assert.equal(errors.length, 0);
    });

    it('fails when the value is less than five digits', function() {
        let zipcode = new ZipCode();

        let errors = zipcode.validate(123);

        chai.assert.equal(errors.length, 1);
    });

    it('fails when the value is more than five and less than nine digits', function() {
        let zipcode = new ZipCode();

        let errors = zipcode.validate('95670-123');

        chai.assert.equal(errors.length, 1);
    });
});