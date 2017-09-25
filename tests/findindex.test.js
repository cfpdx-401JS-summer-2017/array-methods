const findIndex = require('../src/findindex');
const assert = require('assert');

describe('findIndex', () => {

    it('returns index of first item whose callback returns true', () => {
        const array = [1, 2, 3];
        var callback = (item, index) => {
            return array[index] > 1;
        };
        
        let result = findIndex(array, callback);
        assert.equal(result, 1);
    });

    it('returns -1 when no items return true', () => {
        const array = [1, 2, 3];
        var callback = (item, index) => {
            return array[index] > 3;
        };
        
        let result = findIndex(array, callback);
        assert.equal(result, -1);
    });

    it('skips holes in array', () => {
        const array = [,,3];
        var callback = (item, index) => {
            return array[index] > 2;
        };
        
        let result = findIndex(array, callback);
        assert.equal(result, 2);
    });

});