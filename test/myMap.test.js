const assert = require('assert');
const myMap = require('../src/myMap');

describe('map function', () => {
    it('does map', () => {
        const testArray = [100,13,5];
        const testCallback = function(x) {
            return(x * 2);
        };
        const newResult = testArray.map(testCallback);
        console.log('newResult = '+newResult);
        assert.deepEqual(newResult, myMap(testArray, testCallback));
    });
});