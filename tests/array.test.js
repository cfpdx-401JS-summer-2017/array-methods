const assert = require('assert');
const amount = require('../src/calculator');

describe('push', () =>
    it('adds and returns new length', () => {
        const array = [1, 2, 3];
        const length = push(array, 4);
        assert.equal(length, 4);
        assert.equal(array[3], 4);
    });
});