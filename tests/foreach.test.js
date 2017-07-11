
const forEach = require('../src/foreach');
const assert = require('assert');

describe('forEach', () => {

    it('Adds 1 to each item in the array', () => {
            const array = [1, 2, 3];
            const copy = [];
            var callback = (item, index) => {
                copy[index] = item;
            }
            forEach(array, callback);
            assert.deepEqual(copy, array);

    });

});

