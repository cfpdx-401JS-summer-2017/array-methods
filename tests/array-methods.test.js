const assert = require('assert');
const arrayFunctions = require('../src/array-methods');

const checkForHoles = (arr, item, index) => {
  if (!item) {
    return arr.splice(index + 1, 1);
  } else {
    return [arr[index]];
  }
};

describe('array library', () => {
  it('forEach', () => {
    const arr = [5, 6, , 7, 8];
    const forEachArray = arrayFunctions.forEach(arr, checkForHoles);
    assert.deepEqual(forEachArray, [5, 6, 7, 8]);
  });
  it('map', () => {
    const arr = [5, 6, 7, 8,];
    const mapped = arrayFunctions.map(arr, checkForHoles);
    assert.equal(mapped.length, 4);
    assert.deepEqual(mapped, [8, 9, 10, 11]);
  });
  it('filter', () => {
    const arr = [1, 'true', undefined, 3, 0, false, null];
    const truthArray = arrayFunctions.filter(arr, checkForHoles);
    assert.deepEqual(truthArray, [1, 'true', 3]);
  });
  it('builds fibonacci sequence array', () => {
    const arr = [0, 0, 0, 0, 0, 0];
    let acc = 1;
    const fibonacci = function fib(arr) {
      for (var i = 0; i < arr.length; i++) {
        arr[i] = acc;
        if (i >= 1) {
          acc = acc + arr[i - 1];
        } else {
          arr[i] = acc;
        }
      }
      return arr;
    };
    const fibonacciArr = arrayFunctions.reduce(arr, acc, fibonacci);
    assert.deepEqual(fibonacciArr, [1, 1, 2, 3, 5, 8]);
  });
  it('findIndex', () => {
    const arr = [null, , true, 14];
    const trueArray = arrayFunctions.findIndex(arr, checkForHoles);
    assert.equal(trueArray, 1);
  });
  it('every', () => {
    const arr = [1, true, undefined, 97, false];
    const allIndexesAreTrue = arrayFunctions.every(arr);
    assert.equal(allIndexesAreTrue, false);
  });
});
