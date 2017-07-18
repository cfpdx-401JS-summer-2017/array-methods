const assert = require('assert');
const everyItem = require('../src/every');

describe('returns true if every item passes', () => {
    it('every item', () => {
        const testArray = [1, 2, 3];

        const allItems = everyItem(testArray, x => x > 2);
        assert.deepEqual(allItems, false);
    });
});