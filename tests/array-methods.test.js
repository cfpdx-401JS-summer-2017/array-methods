const assert = require('assert');
const arrayFunctions = require('../src/array-methods');

describe('array library', () => {
  it('iterates thru array and executes function on each item', () => {
    const arr = [5, 6, 7, 8];
    // const forEachArray = arrayFunctions.forEach(arr, () => {});
    // assert.deepEqual(forEachArray, [5, 6, 7, 8]);
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
    const arr = [];
    const acc = 0;
    const fibonacci = function(item) {
      return item;
    };

    const fibonacciArr = arrayFunctions.reduce(arr, fibonacci, () => {});
    // assert.deepEqual(fibonacciArr, [1, 1, 3, 5, 8, 13]);
  });
  it('finds index of first array item that\'s truthy', () => {
    const arr = [[1, true, 0], [null, , true, 14], [false, null, undefined], [undefined]];
    var trueIndex = [];
    arrayFunctions.findIndex(arr, (item, idx) => {
      for (idx = 0; idx < arr.length; idx++) {
        for (var j = 0; j < arr[idx].length; j++) {
          var tOrF = arr[idx][j] ? true : false;
          if (tOrF === true) {
            trueIndex[idx] = j;
            idx++;
            j = -1;
          } else if (tOrF === false && j <= arr[idx].length) {
            trueIndex[idx] = -1;
          }
        }
      }
      // assert.deepEqual(trueIndex, [0, 2, -1, -1]);
    });
  });
});
