const assert = require('assert');
const forEach = require('../src/forEach');

describe('forEach library', () => {
    it('adds to each index', () => {
        const testArray = [1, 2, 3];
        const newArray = [];
        forEach(testArray, (item, index) => {
            newArray.push(item);
        });
        assert.deepEqual(newArray, [1, 2, 3]);
    });
});