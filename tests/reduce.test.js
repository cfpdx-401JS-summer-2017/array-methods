const assert = require('assert');
const myReduce = require('../src/reduce');

describe('applies accumulator to each index and reduces to single value', () => {
    it('applies accumulator to each index and reduces to single value', () => {
        const testArray = [1,2,3];

        function testCallback(item, accumulator) {
            accumulator = 0;
            for (let i = 0; i < testArray.length; i++) {
                item = testArray[i+1];
                let reduceValue = testArray[i] += item;
                accumulator += reduceValue;
            }
            return accumulator;
        }

        myReduce(testArray, testCallback);
        assert.deepEqual(myReduce, []);
    });
});