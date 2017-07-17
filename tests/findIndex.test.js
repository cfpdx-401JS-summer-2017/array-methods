const assert = require('assert');
const findIndex = require('../src/findIndex');

describe('returns index of element in array that passes callback test', () => {
    it('returns index of element in array that passes callback test', () => {
        const testArray = [1,2,3];

        // function testCallback(item) {
        //     return item > 2;
        // }

        const found = findIndex(testArray, x => x > 2);
        assert.deepEqual(found,[2]);
    });
});