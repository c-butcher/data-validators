const chai = require('chai');
const Validator = require('../../src/validator');
const Contains = require('../../src/validators/contains');

describe('Contains Validator', function() {

    it('passes with case insensitive matches.', function() {
        let contains = new Contains({
            match: 'world',
            insensitive: true,
            message: 'The value must contain {match}'
        });

        let errors = contains.validate('HelLo WoRlD!');

        chai.assert.equal(errors.length, 0);
    });

    it('passes with case sensitive matches.', function() {
        let contains = new Contains({
            match: 'world',
            message: 'The value must contain {match}'
        });

        let errors = contains.validate('Hello world!');

        chai.assert.equal(errors.length, 0);
    });

    it('fails with case sensitive matches.', function() {
        let contains = new Contains({
            match: 'world',
            message: "The value must contain '{match}'"
        });

        let errors = contains.validate('HelLo WoRlD!');

        chai.assert.equal(errors.length, 1);
    });

    it('fails with no matches.', function() {
        let contains = new Contains({
            match: 'NotMatchingAnything',
            message: "The value must contain '{match}'"
        });

        let errors = contains.validate('HelLo WoRlD!');

        chai.assert.equal(errors.length, 1);
    });
});
