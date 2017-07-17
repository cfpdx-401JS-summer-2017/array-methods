const assert = require('assert');
const map = require('../src/map');


describe('array methods', () => {
    it('map', () => {
        const array = [1, 4, 6];
        const mapped = map(array, x => x + x);
        assert.deepEqual(mapped, [2,8,12]);
        
    });
    
    it('map passes index as second arg', () => {
        const array = [1, 2, 3];
        const mapped = map(array, (x,i) => i);
        assert.deepEqual(mapped, [0,1,2]);
    });
});