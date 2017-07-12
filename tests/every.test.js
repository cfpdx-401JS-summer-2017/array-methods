const assert = require('assert');
const everyItem = require('../src/every');

describe('returns true if all items in array pass callback test', () => {
    it('returns true if all items in array pass callback test', () => {
        const testArray = [1, 2, 3];

        function testCallback(item) {
            if (item > 0) {
                return true;
            }
            else {
                return false;
            }
        }
        everyItem(testArray, testCallback);
        assert.deepEqual(everyItem, []);
    });
});