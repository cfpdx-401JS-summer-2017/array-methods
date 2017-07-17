const assert = require('assert');
const myFilter = require('../src/filter');

describe('creates new array from items that pass test in the callback', () => {
    it('filters array', () => {
        const testArray = [1,2,3];

        const greaterThan = myFilter(testArray, x => x > 1);
        assert.deepEqual(greaterThan,[2,3]);
    });
});