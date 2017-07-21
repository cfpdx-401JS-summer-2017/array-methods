const assert = require('assert');
const everyItem = require('../src/every');

describe('returns true if every item passes', () => {
    it('every item', () => {
        const testArray = [1, 2, 3];

        const allItems = everyItem(testArray, x => x > 2);
        assert.deepEqual(allItems, false);
    });

    it('forEach indexes', () => {
        const testArray = [1,2,3];
        const indexes = [];
        everyItem(testArray, (x,i) => indexes.push(i));
        assert.deepEqual(indexes, [0,1,2]);
    });
});