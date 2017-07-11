const assert = require('assert');
const array = require('../src/array');

describe('array methods', () => {
    it('forEach', () => {
        const testArray = [1,2,3];
        const second = [];
        array.forEach(testArray, (item, index) => {
            second[index] = item;
        });
        assert.deepEqual(second, [1, 2, 3]);
    });

    
});