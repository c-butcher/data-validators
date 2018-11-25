const chai = require('chai');
const Choice = require('../../src/validators/choice');

describe('Choice Validator', function() {

    it('passes when value is within the acceptable values', function() {
        let choice = new Choice({
            values: ['Hello', 'World']
        });

        let errors = choice.validate('Hello');

        chai.assert.equal(errors.length, 0);
    });

    it('fails when the value is not in the acceptable values', function() {
        let choice = new Choice({
            values: ['Hello', 'World'],
        });

        let errors = choice.validate('Non-Existent Key');

        chai.assert.equal(errors.length, 1);
    });

    it('passes when enabling error on matches.', function() {
        let choice = new Choice({
            values: ['Hello', 'World'],
            errorOnMatch: true,
        });

        let errors = choice.validate('Hello');

        chai.assert.equal(errors.length, 1);
    });

    it('passes with case insensitive matches.', function() {
        let choice = new Choice({
            values: ['Hello', 'World'],
            insensitive: true,
        });

        let errors = choice.validate('hello');

        chai.assert.equal(errors.length, 0);
    });
});