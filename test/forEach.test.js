const assert = require('assert');
const forEach = require('../src/forEach');

describe('forEach function', () => {
    it('does forEach', () => {
        const array = [1,3,5,7];
        const resultsArray = [];
        const testCallback = function(x) {
            resultsArray.push(x * 2);
        };
        forEach(array, testCallback);
        assert.deepEqual([2,6,10,14], resultsArray);
    });
});