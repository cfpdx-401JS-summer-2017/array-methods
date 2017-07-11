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
    const arr = [1, true, false, 3, 0, null];
    var truths = [];
    arrayFunctions.filter(arr, (v, i) => {
      if(arr[i]  == true) {
        truths[i] = v;
      }
    });
    assert.deepEqual(truths, [1, true]);
  });
  it('returns total of valid array values', () => {
    const arr = [1, 2, 3, , 4, 5,];
    var acc = 10;
    arrayFunctions.reduce(arr, (v, i) => {
      acc = acc + arr[i];
    });
    assert.deepEqual(acc, 25);
  });
  it('finds index of first array item that\'s truthy', () => {
      const arr = [[1, true, 0],[null, , true, 14],[false, null, undefined], [undefined]];
      var trueIndex = [];
      arrayFunctions.findIndex(arr, (item, idx) => {
        for (var idx = 0; idx < arr.length; idx++) {
          console.log('line 50: ',arr[idx]);
          for (var j = 0; j < arr[idx].length; j++) {
            if(arr[idx][j] == true) {
              trueIndex[idx] = j;
              idx++;
              console.log('1.5: ', arr[idx][j], idx, j);
              // if(arr[idx][j].hasOwnProperty(idx)){
              //   console.log('2: ',arr[idx][j]);
              if(arr[idx][j] == true){
                idx++;
                return trueIndex = arr[idx][j]+' ['+idx+']['+j+']';
                // idx++;
                // console.log(trueIndex);
              }
            } else {
              trueIndex[idx] = j;
              // idx++;
              // console.log(trueIndex);
            }
          }
        }
      });
      console.log('final: ',trueIndex);
      assert.deepEqual(trueIndex, [0, 2, -1, -1])
  });
});
// });
