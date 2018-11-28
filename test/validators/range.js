const chai = require('chai');
const Range = require('../../src/validators/range');

describe('Range Validator', function() {
    it('passes when value is numeric and within the range', function() {
        let range = new Range({
            min: 0,
            max: 100,
        });

        let errors = range.validate(50);

        chai.assert.equal(errors.length, 0);
    });

    it('passes when the value is an numeric string', function() {
        let range = new Range({
            min: 0,
            max: 100,
        });

        let errors = range.validate('123');

        chai.assert.equal(errors.length, 1);
    });

    it('passes when the value is a date object', function() {
        let range = new Range({
            min: 0,
            max: 100,
        });

        let date = new Date();

        let errors = range.validate(date);

        chai.assert.equal(errors.length, 1);
        chai.expect(date).to.be.instanceOf(Date);
    });

    it('fails when the value is a number and above the maximum', function() {
        let range = new Range({
            min: 0,
            max: 100,
        });

        let errors = range.validate(500);

        chai.assert.equal(errors.length, 1);
    });

    it('fails when the value is a number and below the minimum', function() {
        let range = new Range({
            min: 0,
            max: 100,
        });

        let errors = range.validate(-100);

        chai.assert.equal(errors.length, 1);
    });

    it('fails when the value is an text string', function() {
        let range = new Range({
            min: 0,
            max: 100,
        });

        let errors = range.validate('Jack Bauer');

        chai.assert.equal(errors.length, 1);
    });

    it('fails when the value is an boolean', function() {
        let range = new Range({
            min: 0,
            max: 100,
        });

        let errors = range.validate(true);

        chai.assert.equal(errors.length, 1);
    });

    it('fails when the value is an object', function() {
        let range = new Range({
            min: 0,
            max: 100,
        });

        let errors = range.validate({ name: 'Jack Bauer' });

        chai.assert.equal(errors.length, 1);
    });

    it('fails when the value is an function', function() {
        let range = new Range({
            min: 0,
            max: 100,
        });

        let errors = range.validate(() => {});

        chai.assert.equal(errors.length, 1);
    });

    it('fails when the value is null', function() {
        let range = new Range({
            min: 0,
            max: 100,
        });

        let errors = range.validate(() => {});

        chai.assert.equal(errors.length, 1);
    });
});