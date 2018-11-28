const chai = require('chai');
const Boolean = require('../../src/validators/boolean');

describe('Boolean Validator', function() {

    it('passes when boolean is supplied', function() {
        let boolean = new Boolean();

        let errors = boolean.validate(false);

        chai.assert.equal(errors.length, 0);
    });

    it('passes when required and is set to true', function() {
        let boolean = new Boolean({
            required: true
        });

        let errors = boolean.validate(true);

        chai.assert.equal(errors.length, 0);
    });

    it('fails when number is supplied', function() {
        let boolean = new Boolean();

        let errors = boolean.validate(12345);

        chai.assert.equal(errors.length, 1);
    });

    it('fails when string is supplied', function() {
        let boolean = new Boolean();

        let errors = boolean.validate("Hello World");

        chai.assert.equal(errors.length, 1);
    });

    it('fails when object is supplied', function() {
        let boolean = new Boolean();

        let errors = boolean.validate({ name: 'Jack Bauer' });

        chai.assert.equal(errors.length, 1);
    });

    it('fails when function is supplied', function() {
        let boolean = new Boolean();

        let errors = boolean.validate(() => {});

        chai.assert.equal(errors.length, 1);
    });

    it('fails when required and is set to false', function() {
        let boolean = new Boolean({
            required: true
        });

        let errors = boolean.validate(false);

        chai.assert.equal(errors.length, 1);
    });
});
