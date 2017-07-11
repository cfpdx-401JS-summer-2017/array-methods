const reduce = require('../src/reduce');
const assert = require('assert');

describe('reduce', () => {

    it('adds successive array items to previous accumulated sum', () => {
        const array = [1, 2, 3];

        var callback = (accumulator, item, index) => {
            console.log(accumulator);
            return accumulator = accumulator + item;
        };



        reduce(array, callback);
        assert.equal(reduce.accumulator, 6);
    });
});