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

    it('passes when a string is supplied', function() {
        let string = new String({
            required: false
        });

        let errors = string.validate('Hello World');

        chai.assert.equal(errors.length, 0);
    });

    it('fails when a number is supplied', function() {
        let string = new String({
            required: false
        });

        let errors = string.validate(123);

        chai.assert.equal(errors.length, 1);
    });

    it('fails when a object is supplied', function() {
        let string = new String({
            required: true
        });

        let errors = string.validate({name: 'Jack Bauer'});

        chai.assert.equal(errors.length, 1);
    });

    it('fails when a function is supplied', function() {
        let string = new String({
            required: true
        });

        let errors = string.validate(() => {});

        chai.assert.equal(errors.length, 1);
    });

    it('fails when null is supplied', function() {
        let string = new String({
            required: true
        });

        let errors = string.validate(null);

        chai.assert.equal(errors.length, 1);
    });
});