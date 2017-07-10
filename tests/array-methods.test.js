const assert = require('assert');
const methods = require('../src/array-methods');

describe('array library', () => {
    it('adds a value to the array then returns the length', () => {
        const array = [1, 2, 3];
        const length = methods.push(array, 4);
        assert.equal(length, 4);
        assert.equal(array[3], 4);
    });

    it('maps the array and return lengths', () => {
        const array = [1, 2, 3];
        const newArray = array.map(function(x){ return x + 1; });
        assert.equal(array.length, newArray.length);
    });

});
