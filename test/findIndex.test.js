const assert = require('assert');
const findIndex = require('../src/findIndex');

describe('findIndex function', () => {
    it('does findIndex', () => {
        const array = [0, 3, 6, 9, 12, 15];
        const fn = function(x) {
            return x > 9;
        };
        assert.equal(4, findIndex(array, fn));
    });
});