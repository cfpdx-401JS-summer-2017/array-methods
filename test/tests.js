// tests
const arravy = require('../src/arravy');
var assert = require('assert');
// methods = reqire('.../')

//const {map} = reqire()
function testIndexes(fn) {
    const array = [1, 2, 3];
    const indexes = [];
    fn(array, (int, index) => indexes.push(index));
    assert.deepEqual(indexes, [0, 1, 2]);
};

describe('push', () =>  {
    it('adds and returns new length', () => {
        const array = [1, 2, 3];
        const length = arravy.push(array, 4);
        assert.equal(length, 4);
        assert.equal(array[3], 4);
    });
});

describe('forEach', () =>  {
    it('iterates though each item in an array', () => {
        const array = [1, 2, 3];
        const fill = [];
        arravy.forEach(array, function(int,index) {
            //
            fill[index]= int

        });
    
        assert.deepEqual(fill,array);
    });

});

describe('map', () =>  {
    it('iterates though an array and builds off of it forming a new one', () => {
        const array = [1, 2, 3];
        results = [];
       arravy.map(array, function(int,index) {
           newInt = int * 2;
           results.push(newInt)


        });
        assert.deepEqual(results,[2,4,6]);

    });

    it('map passes index as second arg', ()=> {
        testIndexes(arravy.map);

        
    });
});

describe('filter', () =>  {
    // IMPORTANT NOTE: techincaly filter dose not created a new array its edits an existing array.
    //filter as requested in the lab is merly a slightly different version of the map method.
    it('Creates a new array witholing elements that did not pass the test', () => {
        var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
        const filteredArr = arravy.filter(words, function(word,index){
            if(word.length > 6) return true
            else return false
        });
        assert.deepEqual(filteredArr, ["exuberant", "destruction", "present"]);
        
    });
});

describe('reduce', () =>  {
    it('applies a function against an accumulator and each element in the array to reduce it to a single value.', () => {
        const array = [1, 2, 3];
        const sum = arravy.reduce(array, (total, x) => total + x, 0);
        assert.deepEqual(sum,6);

    });
    it('reduce passes index as 3rd argument', () => {
        const array = [1, 2, 3];
        const indexArr = [];
        arravy.reduce(array, (x, y, i) => indexArr.push(i), 0);
        assert.deepEqual(indexArr, [0, 1, 2]);
    });
        
    it('reduce no init value, passes index as third argument', () => {
        const array = [1, 2, 3];
        const indexArr = [];
        arravy.reduce(array, (x, y, i) => indexArr.push(i));
        assert.deepEqual(indexArr, [1, 2]);
    }) 
});


