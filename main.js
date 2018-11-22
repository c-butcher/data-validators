const Validator = require('./src/validator');
const ValidationError = require('./src/validation-error');

const ZipCode = require('./src/validators/zip-code');
const Length = require('./src/validators/length');
const Range = require('./src/validators/range');
const Choice = require('./src/validators/choice');
const Contains = require('./src/validators/contains');

Validator.add('zip-code', ZipCode);
Validator.add('length', Length);
Validator.add('range', Range);
Validator.add('choice', Choice);
Validator.add('contains', Contains);

module.exports = {
    Validator,
    ValidationError,
    ZipCode,
    Length,
    Range,
    Choice,
    Contains,
};
