const map = require('../src/map');
const assert = require('assert');

describe('map', () => {

    it('creates new array by adding 1 to each original array item', () => {
        const array = [1, 2, 3];
        var callback = (item, index) => {
            item = array[index] + 1;
            return item;
        };
        
        let result = map(array, callback);
        assert.equal(result[0], 2);
        assert.equal(result[1], 3);
        assert.equal(result[2], 4);
        assert.equal(result.length, array.length);
    });

    it('skips holes in array and creates new array with same holes', () => {
        const array = [1,,2,3];
        var callback = (item, index) => {
            item = array[index] + 1;
            return item;
        };

        let result = map(array, callback);
        assert.equal(result[0], 2);
        assert.equal(result[1], undefined);
        assert.equal(result[2], 3);
        assert.equal(result[3], 4);
    });
});