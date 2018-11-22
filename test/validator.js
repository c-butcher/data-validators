const chai = require('chai');
const { Validator, Length } = require('../main');

describe('Validator', function() {

    describe('constructor(options)', function() {
        it('passes when supplied argument is an object', function() {
            chai.expect(function(){
                let validator = new Length({
                    min: 2,
                    max: 100,
                });
            }).to.not.throw();
        });

        it('fails when supplied argument is not an object', function() {
            chai.expect(function(){
                let validator = new Length(123);
            }).to.throw();
        });

        it('fails when callable directly', function() {
            chai.expect(function(){
                let validator = new Validator();
            }).to.throw();
        });
    });

    describe('add(name, validator)', function() {
        it('passes when validator extends validator class', function() {
            chai.expect(function() {
                Validator.add('new-validator', class NewValidator extends Validator {
                    constructor(options) {
                        super('new-validator', options);
                    }

                    validate(value) {
                        return true;
                    }
                });
            }).to.not.throw();

            chai.assert.isTrue(Validator.has('new-validator'));
        });

        it('fails when validator does not extend validator class', function() {
            chai.expect(function() {
                Validator.add('invalid', {
                    validate: (value) => {
                        return true;
                    }
                });
            }).to.throw();
        });
    });

    describe('get(name, options)', function() {
        it('passes when validator exists', function() {
            let length = Validator.get('length');

            chai.assert.instanceOf(length, Validator);
        });

        it('fails when validator does not exist', function() {
            chai.expect(function(){
                let length = Validator.get('non-existent');
            }).to.throw();
        });
    });

    describe('check(value, name, options)', function() {
        it('passes when value matches criteria', function() {
            let errors = Validator.check(50, 'range', {
                enabled: true,
                min: 0,
                max: 100,
            });

            chai.assert.equal(errors.length, 0);
        });

        it('fails when value does not match criteria', function() {
            let errors = Validator.check(250, 'range', {
                enabled: true,
                min: 0,
                max: 100,
                message: 'Number must be between {min} - {max}',
            });

            chai.assert.isAbove(errors.length, 0);
        });

    });

    describe('types()', function() {
        it('returns all the validation types', function() {
            let types = Validator.types();

            chai.assert.instanceOf(types, Map);
            chai.assert.property(types, 'size');
            chai.assert.isAbove(types.size, 0);
            chai.assert.typeOf(types.values().next().value, 'function');
        });
    });
});
