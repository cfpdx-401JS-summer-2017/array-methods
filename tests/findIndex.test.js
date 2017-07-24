const assert = require('assert');
const findIndex = require('../src/findIndex');

describe('findIndex library', () => {
    it('returns the index of the first item that satisfies the callback', () => {
        let array = ['taco', 'burrito', 'enchilada'];
        function yummyTaco(string){
            if(string === 'taco'){

                return true;
            }else {
                return false; 
            }
        } 
        assert.equal(findIndex(array, yummyTaco), 0);
        assert.equal(findIndex([0, 1, 2], yummyTaco), -1);
    });
});