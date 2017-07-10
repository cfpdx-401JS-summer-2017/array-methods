const assert = require('assert');
const arrayObj = require('../src/array-methods');



describe('array methods', () => {
  it ('does something to each item in an array', () => {
    const testArray = [1,2,3];
    const results = [];
    const forEachLooped = arrayObj.forEachLoop(testArray, (item, index) => {
      results.push({
        item,
        index
      });
    });
    assert.deepEqual(results, [
      {index: 0, item: 1},
      {index: 1, item: 2},
      {index: 2, item: 3},
    
    ]);
  });

  it ('does something to each item in an array and returns a new array', () => {
    const testArray = [1,2,3];
    const mappedArray = arrayObj.mapArray(testArray, () => {
;
    });
    assert.equal(mappedArray, [2,3,4]);
  });


});