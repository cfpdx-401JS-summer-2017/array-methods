const assert = require('assert');
const map = require('../src/map');

describe('map function', () => {
    it('does map', () => {
        const testArray = [2,4,6,8];
        const testCallback = function(x) {
            return(x * 2);
        };
        assert.deepEqual([4,8,12,16], map(testArray, testCallback));
    });
});