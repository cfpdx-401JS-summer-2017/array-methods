const assert = require('assert');
const forEach = require('../src/forEach');

describe('runs a callback through each item in the array', () => {
    it('runs callback through each item in array', () => {
        const testArray = [1,2,3];
        const newArray = [];
        function testCallback(item, index) {
            newArray.push({item,index});
        }

        forEach(testArray, testCallback);
        assert.deepEqual(newArray,[
            {index: 0, item: 1}, 
            {index:1, item:2}, 
            {index:2, item:3}
        ]);
    });

});