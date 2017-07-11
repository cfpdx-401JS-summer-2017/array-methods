const assert = require('assert');
const myMap = require('../src/map');

describe('creates new array with return value of callback', () => {
    it('creates new array with return value of callback', () => {
        const testArray = [1, 2, 3];
        
        function testCallback(item, index) {
            let mappedValue = item += 1;
            return mappedValue;
        }

        myMap(testArray, testCallback);
        assert.deepEqual(myMap, []);
    });
});