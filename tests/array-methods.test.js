// Implement select array methods from scratch. Only use:
// * `array.length`
// * `array[i] = value`
// * `value = array[i]`
const assert = require('assert');
const arrayFunctions = require ('../src/array-methods');

describe('array library', () => {
  it('iterates thru array and does a cb on each item', () => {
    const arr = [5, 6, 7, 8];
    var results = [];
    const each = arrayFunctions.forEach(arr, (v, i) => {
      results[i] = v;
    });
    assert.deepEqual(results, [5, 6, 7, 8]);
  });


});
