const assert = require('assert');
const myMap = require('../src/map');

describe('creates new array with return value of callback', () => {
    it('creates new array with return value of callback', () => {
        const testArray = [1, 2, 3];
        const newArray = [];
        function testCallback(item, index) {
            for (let i = 0; i < testArray.length; i++) {
                console.log(index);
                let mappedValue = testArray[i] += 1;
                newArray.push({index, mappedValue});
            }
            return newArray;
        }

        myMap(testArray, testCallback);
        assert.deepEqual(newArray, [
            // {mappedIndex: 0, mappedValue: 2}, 
            // {mappedIndex: 1, mappedValue: 3}, 
            // {mappedIndex: 2, mappedValue:4}
        ]);
    });
});