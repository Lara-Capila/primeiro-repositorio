const assert = require('assert');
const sumAllNumbers = arrayNumbers => {
    let output = 0;
    for (index = 0; index < arrayNumbers.length; index += 1) {
        output += arrayNumbers[index]
    }
    return output;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);