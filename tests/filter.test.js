const assert = require('assert');
const myFilter = require('../src/filter');

describe('new filtered array', () => {
    it('filters array', () => {
        const testArray = [1,2,3];

        const greaterThan = myFilter(testArray, x => x > 1);
        assert.deepEqual(greaterThan,[2,3]);
    });

});