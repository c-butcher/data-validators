const chai = require('chai');
const { Validator, ValidationError } = require('../../main');

describe('Choice Validator', function() {
    it('exists and is accessible', function() {
        chai.assert.isOk(Validator.types().has('choice'));
    });

    it('passes when value is within the acceptable values', function() {
        let errors = Validator.check('Hello', 'choice', {
            values: ['Hello', 'World']
        });

        chai.assert.equal(errors.length, 0);
    });

    it('fails when the value is not in the acceptable values', function() {
        let errors = Validator.check('Non-Existent Key', 'choice', {
            values: ['Hello', 'World'],
            message: 'Your choice must be one of the following {values}'
        });

        chai.assert.equal(errors.length, 1);
    });

    it('passes when enabling error on matches.', function() {
        let errors = Validator.check('Hello', 'choice', {
            values: ['Hello', 'World'],
            errorOnMatch: true,
            message: 'Your choice must be one of the following {values}'
        });

        chai.assert.equal(errors.length, 1);
    });

    it('passes with case insensitive matches.', function() {
        let errors = Validator.check('hello', 'choice', {
            values: ['Hello', 'World'],
            insensitive: true,
            message: 'Your choice must be one of the following {values}'
        });

        chai.assert.equal(errors.length, 0);
    });
});