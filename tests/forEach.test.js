const assert = require('assert');
const forEach = require('../src/forEach');

describe('runs a callback through each item in the array', () => {
    it('runs callback through each item in array', () => {
        const array = [1,2,3];
        const testCallback = x => x += 1;
        
        assert.equal(array.forEach(testCallback));
    });

});