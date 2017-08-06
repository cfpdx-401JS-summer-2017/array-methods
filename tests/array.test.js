const assert = require('assert');
const array = require('../src/array');

describe('array methods', () => {
    it('forEach', () => {
        const testArray = [1,3,5];
        const second = [];
        array.forEach(testArray, (item, index) => {
            second[index] = item;
        });
        assert.deepEqual(second, [1, 3, 5]);
    });

    it('forEach Part Two: The Reckoning', () => {
        const somethingFun = [1, 4, 6];
        const doubleTheFun = [];
        array.forEach(somethingFun, (item, index) => {
            doubleTheFun[index] = item*2;
        });
        assert.deepEqual(doubleTheFun, [2,8,12]);
    });

    it('map', () => {
        const testArray = [1,3,5];
        const second = array.map(testArray, (item, index) => {
            return item + index;
        });
        assert.deepEqual(second, [1,4,7]);
    });

    it('filter', () => {
        const testArray = [1,3,5];
        const second = array.filter(testArray, (item, index) => item > 2);
        assert.deepEqual(second, [3,5]);
    });

    it('reduce', () => {
        const testArray = [1,3,5];
        function accumulate(accumulator, item) {
            return accumulator + item;
        }
        const reduced = array.reduce(testArray, accumulate);
        assert.deepEqual(reduced, 9);
    });

    it('reduce with initialValue argument', () => {
        const testArray = [1,3,5];
        function accumulate(accumulator, item) {
            return accumulator + item;
        }
        const reduced = array.reduce(testArray, accumulate, 10);
        assert.deepEqual(reduced, 19);
    });

    it('findIndex', () => {
        const testArray = [null,3,5];
        function truthCheck(item) {
            if(item) {
                return true;
            }
        }
        const found = array.findIndex(testArray, truthCheck);
        assert.deepEqual(found, 1);
    });

});