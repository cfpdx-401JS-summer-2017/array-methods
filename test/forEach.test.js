const assert = require('assert');
const forEach = require('../src/forEach');

describe('forEach function', () => {
    it('does forEach', () => {
        const array = [1,3,5,7];
        const results = [];
        const fn = function(x) {
            results.push(x * 2);
        };
        forEach(array, fn);
        assert.deepEqual(results, [2,6,10,14]);
    });
});