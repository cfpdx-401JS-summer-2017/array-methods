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
        console.log('the words array starts as=', words);

        const filteredArr = arravy.filter(words, function(word,index){
            if(word.length > 6) return true
            else return false
        });
        assert.deepEqual(filteredArr, ["exuberant", "destruction", "present"]);
        
    });
});

describe('reduce(array, callback [, initialValue])', () =>  {
    it('applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.', () => {
        const array = [1, 2, 3];
        const sum = arravy.reduce(array, (total, x) => total + x, 0); 
        // //function(int,index) {
        //     multiplyer = int * 2;
        //     newArray[index] = multiplyer


        // });
        assert.deepEqual(sum,6);

    });
    it('reduce no init value, passes index as 3d argument', ) 
});

describe('findIndex(array, callback)', () =>  {
    it('returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.', () => {
        const array = [1, 2, 3];
        const length = arravy.map(array, function(int,index) {
            multiplyer = int * 2;
            newArray[index] = multiplyer


        });
        assert.deepEqual(newArray,[2,4,6]);

    });
});

describe('every(array, callback)', () =>  {
    it('tests whether all elements in the array pass the test implemented by the provided function', () => {
        const array = [1, 2, 3];
        const length = arravy.map(array, function(int,index) {
            multiplyer = int * 2;
            newArray[index] = multiplyer


        });
        assert.deepEqual(newArray,[2,4,6]);

    });
});
