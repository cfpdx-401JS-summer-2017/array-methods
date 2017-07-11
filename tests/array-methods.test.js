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
    arrayFunctions.forEach(arr, (v, i) => {
      results[i] = v;
    });
    assert.deepEqual(results, [5, 6, 7, 8]);
  });
  it('iterates thru array and adds 3 to each item', () => {
    const arr = [5, 6, 7, 8];
    var plusThree = [];
    arrayFunctions.map(arr, (v, i) => {
      plusThree[i] = arr[i] + 3;
    });
    assert.deepEqual(arr.length, plusThree.length);
    assert.deepEqual(plusThree, [8, 9, 10, 11]);
  });
  it('creates a new array that contains true/truthy values from initial array', () => {
    const arr = [1, true, false, 3];
    var truths = [];
    arrayFunctions.filter(arr, (v, i) => {
      if(arr[i]  == true) {
        truths[i] = v;
      }
    });
    assert.deepEqual(truths, [1, true]);
  });
});
