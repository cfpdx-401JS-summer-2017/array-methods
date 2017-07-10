const assert = require('assert');
const myMap = require('../src/myMap');

describe('map function', () => {
    it('does map', () => {
        const testArray = [5,6,400,12];
        const testCallback = function(x) {
            return(x * 2);
        };
        const jsMapResult = testArray.map(testCallback);
        assert.deepEqual(jsMapResult, myMap(testArray, testCallback));
    });
});