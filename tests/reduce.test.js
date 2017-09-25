const reduce = require('../src/reduce');
const assert = require('assert');

describe('reduce', () => {

    it('successfully sums successive array items WITHOUT optional initial value', () => {
        
        const array = [1, 2, 3];

        function sum(accumulator, item, index) {
            return accumulator + item;
        }

        const total = reduce(array, sum);
        assert.equal(total, 6);
    });

    it('successfully sums successive array items WITH optional initial value', () => {
        
        const array = [1, 2, 3];

        function sum(accumulator, item, index) {
            return accumulator + item;
        }

        const total = reduce(array, sum, 10);
        assert.equal(total, 16);
    });

    it('sums successive array items while skipping array holes', () => {
        
        const array = [5,,6, 7];

        function sum(accumulator, item, index) {
            return accumulator + item;
        }

        const total = reduce(array, sum);
        assert.equal(total, 18);
    });
});