const filter = require('../src/filter');
const assert = require('assert');

describe('filter', () => {

    it('returns new array of all items whose callback returned true ', () => {
        const array = [0, 2, 3];
        var callback = (item, index) => {
            return array[index] > 0;
        };
        
        let result = filter(array, callback);
        assert.deepEqual(result, [2, 3]);
    });
});