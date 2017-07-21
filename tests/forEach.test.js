const assert = require('assert');
const forEach = require('../src/forEach');

describe('runs callback through each item in the array', () => {

    it('runs callback through each item in the array', () => {
        const array = [1, 2, 3];
        const called = [];
        forEach(array, x => called.push(x));
        assert.deepEqual(called, array);
    });

    it('forEach indexes', () => {
        const testArray = [1,2,3];
        const indexes = [];
        forEach(testArray, (x,i) => indexes.push(i));
        assert.deepEqual(indexes, [0,1,2]);
    });

});