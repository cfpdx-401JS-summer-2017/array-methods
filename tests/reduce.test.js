const assert = require('assert');
const reduce = require('../src/reduce');

describe('reduce library', () => {
    const testArray = [1,2,3];
    function accumulate(accumulator, item){
        return accumulator + item;
    }
    const reducedValue = reduce(testArray, accumulate);
    assert.deepEqual(reducedValue, 6);
});