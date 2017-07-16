const assert = require('assert');
const arrayObj = require('../src/array-methods');

describe('array methods', () => {
  it ('does something to each item in an array', () => {
    const testArray = [1,2,3];
    const results = [];
    arrayObj.forEach(testArray, (item, index) => {
      results.push({
        item,
        index
      });
    });
    assert.deepEqual(results, [
      {index: 0, item: 1},
      {index: 1, item: 2},
      {index: 2, item: 3}
    ]);
  });

  it ('does something to each item in an array and returns a new array', () => {
    const testArray = [4,8,13];
    const mappedArray = arrayObj.map(testArray, (item, index) => item + 3);
    assert.deepEqual(mappedArray, [7,11,16]);
  });

  it ('filters through an array and creates a new array with values that are truthy per a callback function', () => {
    const testArray = [3,5,9,12,14];
    const filteredArray = arrayObj.filter(testArray, (item, index) => item % 3 === 0
    );
    assert.deepEqual(filteredArray, [3,9,12]);
  });

  it ('accumulates all items in an array per the callback function and returns one value', () => {
    const testArray = [3,1,5,12,10];
    const reduced1 = arrayObj.reduce(testArray, (accumulator, item, index) => {return item;}, 7 );
    assert.equal(reduced1, 38);
    const reduced2 = arrayObj.reduce( testArray, (accumulator, item, index) => {return item;} );
    assert.equal(reduced2, 31);
  });

  it ('takes an argument and returns the index of that argument from the array it acts on', () => {
    const testArray = [16, 3, 24, 42, 375];
    const foundIndexTrue = arrayObj.findIndex( testArray, (item, index) => 42 );
    assert.equal(foundIndexTrue, 3);
    const foundIndexFalse = arrayObj.findIndex( testArray, (item, index) => 743 );
    assert.equal(foundIndexFalse, -1);
  });

  it ('returns true if all items in the array meet the requirement of the callback, else it returns false', () => {
    const testArray = [54, 18, 12, 6];
    const everyTrue = arrayObj.every( testArray, (item, index) => item % 2 === 0);
    assert.equal(everyTrue, true);
    const everyFalse = arrayObj.every( testArray, (item, index) => item % 4 === 0);
    assert.equal(everyFalse, false);
  });
});