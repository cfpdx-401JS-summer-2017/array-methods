const assert = require('assert');
const findIndex = require('../src/findIndex');

describe('find index', () => {
    it('returns the index of passed element', () => {
        const testArray = [5, 10, 20];
        const found = findIndex(testArray, x => x > 5);
        assert.equal(found, 1);
    });

});