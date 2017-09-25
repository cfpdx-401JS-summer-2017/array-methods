const every = require('../src/every');
const assert = require('assert');

describe('every', () => {

    it('returns true when all callback return true or truthy', () => {
        const array = [1, 2, 3];
        var callback = (item, index) => {
            return array[index] > 0;
        };
        
        let result = every(array, callback);
        assert.equal(result, true);
    });

    it('returns false when any callback does not return true or truthy', () => {
        const array = [0, 2, 3];
        var callback = (item, index) => {
            return array[index] > 0;
        };
        
        let result = every(array, callback);
        assert.equal(result, false);
    });
});

