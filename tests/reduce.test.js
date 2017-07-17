const assert = require('assert');
const myReduce = require('../src/reduce');

describe('applies accumulator to each index and reduces to single value', () => {
    it ('reduce to single value', () => {
        const array = [1,2,3];
        const sum = myReduce(array, (total, x) => total + x, 0);
        assert.deepEqual(sum, 6);

    });
});