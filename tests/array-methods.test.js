const assert = require('assert');
const arrayFunctions = require('../src/array-methods');

describe('array library', () => {
  it('iterates thru array and executes function on each item', () => {
    const arr = [5, 6, 7, 8];
    const forEachArray = arrayFunctions.forEach(arr);
    assert.deepEqual(forEachArray, [5, 6, 7, 8]);
  });
  it('iterates thru array adds 3 to each item', () => {
    const arr = [5, 6, 7, 8];
    const addThree = function(item) {
      return item + 3;
    };
    const mapped = arrayFunctions.map(arr, addThree);
    assert.equal(mapped.length, 4);
    assert.deepEqual(mapped, [8, 9, 10, 11]);
  });
  it('creates a new array that contains true/truthy values from array', () => {
    const arr = [1, 'true', undefined, 3, 0, false, null];
    const truthArray = arrayFunctions.filter(arr);
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
  it('finds index of first array item that\'s truthy', () => {
    const arr = [[1, true, 0], [null, , true, 14], [false, null, undefined], [undefined]];
    const indexFn = function(arr) {
      const finalArray = [];
      for (var idx = 0; idx < arr.length; idx++) {
        if (Boolean(arr[idx][0]) === true) {
          finalArray.push(idx);
          idx++;
        }
        for (var j = 0; j < arr[idx].length; j++) {
          if (Boolean(arr[idx][j]) === true) {
            finalArray.push(j);
            j++;
          } else {
            if (j + 1 == arr[idx].length) {
              finalArray.push(-1);
            }
          }
        }
      }
      return finalArray;
    };
    const trueArray = arrayFunctions.findIndex(arr, indexFn);
    assert.deepEqual(trueArray, [0, 2, -1, -1]);
  });
  it('returns true if every item in the array is truthy, otherwise returns false', () => {
    const arr = [1, true, undefined, 97, false];
    const allIndexesAreTrue = arrayFunctions.every(arr);
    assert.equal(allIndexesAreTrue, false);
  });
});
