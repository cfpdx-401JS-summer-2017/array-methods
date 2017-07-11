const assert = require('assert');
const array = require('../src/array');

describe('array methods', () => {
    it('forEach', () => {
        const testArray = [1,3,5];
        const second = [];
        array.forEach(testArray, (item, index) => {
            second[index] = item;
        });
        assert.deepEqual(second, [1, 3, 5]);
    });

    it('map', () => {
        const testArray = [1,3,5];
        const second = array.map(testArray, (item, index) => {
            return item + index;
        });
        assert.deepEqual(second, [1,4,7]);
    });

});