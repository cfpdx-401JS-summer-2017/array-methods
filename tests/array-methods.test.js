const assert = require('assert');
const methods = require('../src/array-methods');

describe('array library', () => {
    // push
    it('adds a value to the array then returns the length', () => {
        const array = [1, 2, 3];
        const length = methods.push(array, 4);
        assert.equal(length, 4);
        assert.equal(array[3], 4);
    });
    // for each
    it('loops through the array and counts numbers', () => {
        const array = [1, 'a', 2, 'b', 3, 'c'];
        const length = methods.foreach(array);
        assert.equal(length, 3);
    });
    // map
    it('maps the array to a new array and returns the new length', () => {
        const array = [1, 2, 3];
        const length = methods.map(array);
        assert.equal(length, 3);
    });
    // filter
    it('filters the array for numbers and returns the new length', () => {
        const array = [1, 'a', 2, 'b'];
        const index = methods.filter(array);
        assert.equal(index, 2);
    });
    // reduce
    it('reduces the array and returns sum', () => {
        const array = [1, 2, 3];
        const sum = methods.reduce(array);
        assert.equal(sum, 6);
    });
});
