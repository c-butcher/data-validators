const chai = require('chai');
const Range = require('../../src/validators/range');

describe('Range Validator', function() {
    it('passes when value is within the range', function() {
        let range = new Range({
            min: 0,
            max: 100,
        });

        let errors = range.validate(50);

        chai.assert.equal(errors.length, 0);
    });

    it('fails when the value is outside of the range', function() {
        let range = new Range({
            min: 0,
            max: 100,
        });

        let errors = range.validate(500);

        chai.assert.equal(errors.length, 1);
    });
});