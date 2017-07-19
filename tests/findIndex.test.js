const assert = require('assert');
const findIndex = require('../src/findIndex');

describe('find index', () => {
    it('returns the index of passed element', () => {
        const testArray = [5, 10, 20];
        const found = findIndex(testArray, x => x >= 5);
        assert.equal(found, 0);
    });

    it('returns indexes array', () => {
        const array = [1, 2, 3];
        const indexes = [];
        findIndex(array, (item,i) => indexes.push(i));
        assert.deepEqual(indexes, [0]);
    });
});