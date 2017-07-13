const assert = require('assert');
const map = require('../src/map');

describe('map library', () => {
    const testArray = [1, 2, 3];
    const newArray = map(testArray, (item) => item += 1);
    it('returns an array', () => {

        assert.ok(Array.isArray(newArray));
    });
    it('returns the correct array', () => {
        assert.deepEqual(newArray, [2, 3, 4]);
    });
});