const chai = require('chai');
const { ValidationError } = require('../main');

describe('Validation Error', function() {

    describe('constructor(message, params)', function() {
        it('passes when message is a string and params are an object', function() {
            chai.expect(function(){
                let error = new ValidationError('Hello {name}.', {
                    name: 'Human',
                });

                chai.assert.instanceOf(error, ValidationError);
            }).to.not.throw();
        });

        it('fails when message is not a string', function() {
            chai.expect(function(){
                let error = new ValidationError(true, 234);
            }).to.throw();
        });

        it('fails when params is not an object', function() {
            chai.expect(function(){
                let error = new ValidationError('hello', 234);
            }).to.throw();
        });

        it('message placeholders are replaced with parameters', function() {
            let error = new ValidationError('Hello {name}', {
                name: 'Human',
            });

            chai.assert.equal(error.message, 'Hello Human');
        });
    });
});
