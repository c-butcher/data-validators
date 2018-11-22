## Length Validator
Checks to make sure that a values length falls within a certain range.

### Options
| Name    | Required | Type    | Description                         |
|---------|----------|---------|-------------------------------------|
| min     | Yes      | number  | The minimum length of the value     |
| max     | Yes      | number  | The maximum length of the value     |
| message | No       | string  | Explanation of the validation error |

## Contains Validator
Checks to make sure that the value contains what we're matching.

### Options
| Name        | Required | Type            | Description                                    |
|-------------|----------|-----------------|------------------------------------------------|
| match       | Yes      | string, number  | The value that we're trying to match.          |
| insensitive | No       | boolean         | Tells whether to do a case-insensitive search. |
| message     | No       | string          | Explanation of the validation error            |

## Range Validator
Checks to make sure that a value falls within a certain range.

### Options
| Name    | Required | Type         | Description                         |
|---------|----------|--------------|-------------------------------------|
| min     | Yes      | number, date | The lowest boundary of the range    |
| max     | Yes      | number, date | The highest boundary of the range   |
| message | No       | string       | Explanation of the validation error |

## Choice Validator
Checks to make sure that a value falls within a specific set of acceptable values.

### Options
| Name           | Required | Type    | Description                                                   |
|----------------|----------|---------|---------------------------------------------------------------|
| values         | Yes      | array   | List of the acceptable values                                 |
| insensitive    | No       | boolean | Tells whether to do a case-insensitive search                 |
| containsValue  | No       | boolean | Only passes validation when the supplied value is in our list |  |
| message        | No       | string  | Explanation of the validation error                           |

## Zip Code Validator
Checks to make sure that a value follows the zip code format.

_Example_: `23551` or `23551-1234`

### Options
| Name    | Required | Type          | Description                         |
|---------|----------|---------------|-------------------------------------|
| message | No       | string        | Explanation of the validation error |
