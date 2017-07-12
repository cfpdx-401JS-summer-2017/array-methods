const assert = require('assert');
const reduce = require('../src/reduce');

describe('reduce function', () => {
    it('does reduce', () => {
        const array = [10.25, 19.667, 30.333, 39.875];
        const fn = function(x) {
            return Math.round(x);
        };
        assert.equal(reduce(array, fn), 100);
    });
});