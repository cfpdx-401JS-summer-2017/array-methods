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

    it('filter indexes', () => {
        testIndex(methods.filter);
    });

    it('reduce', () => {
        const array = [10, 20, 30];
        const sum = methods.reduce(array, (total, x) => total + x, 0);
        assert.equal(sum, 60);
    });

    it('find index', () => {
        const array = ['fee','fie','foe','fum'];
        const found = methods.findindex(array, (found, index) => array[index] === 'foe');
        assert.deepEqual(found, 2);
    });

    it('find index not found', () => {
        const array = ['fee','fie','foe','fum'];
        const found = methods.findindex(array, (found, index) => array[index] === 'fo');
        assert.deepEqual(found, -1);
    });

    it('every returns false', () => {
        const array = ['duck', 'duck', 'duck', 'goose'];
        const allTheSame = methods.every(array, (isSame, index) => array[index] === 'duck');
        assert.deepEqual(allTheSame, false);
    });

    it('every returns true', () => {
        const array = ['duck', 'duck', 'duck'];
        const allTheSame = methods.every(array, (isSame, index) => array[index] === 'duck');
        assert.deepEqual(allTheSame, true);
    });
});
