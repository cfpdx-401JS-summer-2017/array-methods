const assert = require('assert');
const myFilter = require('../src/filter');

describe('creates new array from items that pass test in the callback', () => {
    it('creates new array from items that pass test in the callback', () => {
        const testArray = [1,2,3];

        function testCallback(item, index) {
            return item >= 0;
        }

        myFilter(testArray, testCallback);
        assert.deepEqual(myFilter,[]);
    });
});