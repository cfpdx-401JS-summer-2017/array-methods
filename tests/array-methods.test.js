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
        const numbers = [];
        array.forEach(function(x) {
            if(Number.isInteger(x)) { numbers.push(x); }
        });
        assert.equal(numbers.length, 3);
    });
    // map
    it('maps the array and return lengths', () => {
        const array = [1, 2, 3];
        const newArray = array.map(function(x){ return x + 1; });
        assert.equal(array.length, newArray.length);
    });


});
