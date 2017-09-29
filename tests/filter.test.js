const assert = require('assert');
const filter = require('../src/filter');

describe('filter library', () => {
    const testArray = [1, 2, 3];
    const newArray = filter(testArray, (item) => item > 1);
    it('returns array of filtered items', () => {
        assert.deepEqual(newArray, [2, 3]);
    });
});