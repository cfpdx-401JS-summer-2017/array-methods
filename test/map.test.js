const assert = require('assert');
const map = require('../src/map');

describe('map function', () => {
    it('does map', () => {
        const array = [2,4,6,8];
        const fn = function(x) {
            return(x * 2);
        };
        assert.deepEqual([4,8,12,16], map(array, fn));
    });
});