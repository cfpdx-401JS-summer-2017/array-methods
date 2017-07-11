const forEach = require('../src/foreach');
const assert = require('assert');

describe('map', () => {

    it('creates new array by adding 1 to each original array item', () => {
        const array = [1, 2, 3];
        const newArray = [];
        var callback = (item, index) => {
            newArray[index] = item + 1;
        };
        
        forEach(array, callback);
        assert.equal(newArray[0], 2);
        assert.equal(newArray[1], 3);
        assert.equal(newArray[2], 4);
        assert.equal(newArray.length, array.length);
    });
});

