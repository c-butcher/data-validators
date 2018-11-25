const chai = require('chai');
const Validator = require('../../src/validator');

describe('Contains Validator', function() {
    it('exists and is accessible', function() {
        chai.assert.isOk(Validator.types().has('contains'));
    });

    it('passes with case insensitive matches.', function() {
        let errors = Validator.check('HelLo WoRlD!', 'contains', {
            match: 'world',
            insensitive: true,
            message: 'The value must contain {match}'
        });

        chai.assert.equal(errors.length, 0);
    });

    it('passes with case sensitive matches.', function() {
        let errors = Validator.check('Hello world!', 'contains', {
            match: 'world',
            message: "The value must contain '{match}'"
        });

        chai.assert.equal(errors.length, 0);
    });

    it('fails with case sensitive matches.', function() {
        let errors = Validator.check('HelLo WoRlD!', 'contains', {
            match: 'world',
            message: "The value must contain '{match}'"
        });

        chai.assert.equal(errors.length, 1);
    });
});
