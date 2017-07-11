const assert = require('assert');
const arrayMethods = require('../src/array-methods.js');

describe('arrayMethods', () => {
    it('forEach: it takes a callback and performs it on the array', () => {
        const testArray = [1,2,5];
        const results = [];
        arrayMethods.forEachMethod(testArray, (item, i) => { 
            console.log(item, i);
            results[i] = item;
        });
        assert.deepEqual(results, [1, 2, 5]);
    });












    // it('filter: it creates a new array of each item that has a truthy value after passing a check and returns that new array', () => {

    // });

    // it('reduce: it takes accumulator and current values and performs a callback which returns the accumulated value after each function call', () => {

    // });

    // it('findIndex: it returns the index of the first item of an array that returns a truthy value after a callback', () => {

    // });

    // it('every: it takes a callback and returns true if each item of the array returns a truthy value after the callback is applied', () => {

    // });


});