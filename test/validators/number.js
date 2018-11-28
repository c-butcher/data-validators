const chai = require('chai');
const Validator = require('../../src/validator');
const Number = require('../../src/validators/number');
const Range = require('../../src/validators/range');

describe('Number Validator', function() {

    before(() => {
        Validator
            .add('range', Range);
    });

    it('passes when number is supplied', function() {
        let string = new Number({
            required: false
        });

        let errors = string.validate(12345);

        chai.assert.equal(errors.length, 0);
    });

    it('fails when string is supplied', function() {
        let string = new Number({
            required: false
        });

        let errors = string.validate("Hello World");

        chai.assert.equal(errors.length, 1);
    });

    it('fails when boolean is supplied', function() {
        let string = new Number({
            required: false
        });

        let errors = string.validate(true);

        chai.assert.equal(errors.length, 1);
    });

    it('fails when object is supplied', function() {
        let string = new Number({
            required: false
        });

        let errors = string.validate({ name: 'Jack Bauer' });

        chai.assert.equal(errors.length, 1);
    });

    it('fails when function is supplied', function() {
        let string = new Number({
            required: false
        });

        let errors = string.validate(() => {});

        chai.assert.equal(errors.length, 1);
    });
});
