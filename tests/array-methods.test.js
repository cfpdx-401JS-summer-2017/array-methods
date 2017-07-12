const assert = require('assert');
const methods = require('../src/array-methods');

describe('array library', () => {
    it('for each', () => {
        const array = [1, 2, 3];
        const newArray = [];
        methods.foreach(array, x => newArray.push(x));
        assert.deepEqual(newArray, array);
    });
    
    it('map', () => {
        const array = [1, 2, 3];
        const mappedArray = methods.map(array, x => x * 2);
        assert.deepEqual(mappedArray, [2, 4, 6]);
    });

    function testIndex(fnToTest) {
        const array = ['a', 'b', 'c'];
        const indexes = [];
        fnToTest(array, (x, i) => indexes.push(i));
        assert.deepEqual(indexes, [0, 1, 2]);
    }

    it('map indexes', () => {
        testIndex(methods.map);
    });
    
    it('filter', () => {
        const array = [1, 10, 2, 20];
        const tens = methods.filter(array, x => x%10 === 0);
        assert.deepEqual(tens, [10, 20]);
    });




    // reduce
    // it('reduces the array and returns sum', () => {
    //     const array = [1, 2, 3];
    //     const sum = methods.reduce(array);
    //     assert.equal(sum, 6);
    // });
    // find index
    // it('find the value the array and returns the index', () => {
    //     const array = [1, 2, 3];
    //     const sum = array.findIndex(array, 2);
    //     assert.equal(sum, 1);
    // });
    // every
    
});
