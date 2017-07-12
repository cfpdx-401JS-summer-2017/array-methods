const assert = require('assert');
const methods = require('../src/array-methods');

describe('array library', () => {
    // for each
    it('loops through the array and counts numbers', () => {
        const array = [1, 2, 3];
        const newArray = [];
        methods.foreach(array, x => newArray.push(x));
        assert.deepEqual(newArray, array);
    });
    // map



    // it('maps the array to a new array and returns the new length', () => {
    //     const array = [1, 2, 3];
    //     const length = methods.map(array);
    //     assert.equal(length, 3);
    // });
    // // filter
    // it('filters the array for numbers and returns the new length', () => {
    //     const array = [1, 'a', 2, 'b'];
    //     const index = methods.filter(array);
    //     assert.equal(index, 2);
    // });
    // reduce
    // it('reduces the array and returns sum', () => {
    //     const array = [1, 2, 3];
    //     const sum = methods.reduce(array);
    //     assert.equal(sum, 6);
    // });
    // find index
    // it('find the value the array and returns the index', () => {
    //     const array = [1, 2, 3];
    //     const sum = array.findIndex(array, 2);
    //     assert.equal(sum, 1);
    // });
    // every
    
});
