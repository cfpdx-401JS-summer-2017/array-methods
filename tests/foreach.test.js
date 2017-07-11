
const forEach = require('../src/foreach');
const assert = require('assert');

describe('forEach', () => {

    it('creates a copy of array', () => {
        const array = [1, 2, 3];
        const copy = [];
        var callback = (item, index) => {
            copy[index] = item;
        };
        
        forEach(array, callback);
        assert.deepEqual(copy, array);
    });
});

