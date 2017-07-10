const assert = require('assert');
const arrayObj = require('../src/array-methods');



describe('array methods', () => {
  it ('does something to each item in an array', () => {
    const testArray = [1,2,3];
    const forEachLooped = arrayObj.forEachLoop(testArray, () => {});
    assert.equal(forEachLooped, undefined);
  });

  it ('does something to each item in an array and returns a new array', () => {
    const testArray = [1,2,3];
    const mappedArray = arrayObj.mapArray(testArray, () => {

      return [];
    })
    assert.equal(mappedArray, [2,3,4]);
  })


});