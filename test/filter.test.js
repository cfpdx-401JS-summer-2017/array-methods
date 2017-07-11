const assert = require('assert');
const filter = require('../src/filter');

describe('filter function', () => {
    it('does filter', () => {
        const array = [3,7,5,9];
        const fn = function(x) {
            if(x>5) {
                return x;
            }
        };
        assert.deepEqual([7,9], filter(array, fn));
    });
});