const assert = require('assert');
const every = require('../src/every');

describe('every function', () => {
    it('does every', () => {
        const array = [100, 200, 300, 400];
        const fn = function(x) {
            return x < 400;
        };
        assert.equal(false, every(array, fn));
    });
});