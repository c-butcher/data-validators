const Validator = require('./src/validator');
const Boolean = require('./src/validators/boolean');
const Choice = require('./src/validators/choice');
const Contains = require('./src/validators/contains');
const Length = require('./src/validators/length');
const Number = require('./src/validators/number');
const Range = require('./src/validators/range');
const String = require('./src/validators/string');
const ZipCode = require('./src/validators/zip-code');

Validator
    .add('boolean', Boolean)
    .add('choice', Choice)
    .add('contains', Contains)
    .add('length', Length)
    .add('number', Number)
    .add('range', Range)
    .add('string', String)
    .add('zip-code', ZipCode);

module.exports = {
    Validator,
    Boolean,
    Choice,
    Contains,
    Length,
    Number,
    Range,
    String,
    ZipCode,
};
