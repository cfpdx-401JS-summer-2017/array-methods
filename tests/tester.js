// tests
const arravy = require('../src/arravy');
var assert = require('assert');

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
            fill[index]= int

        });
    
        assert.deepEqual(fill,[1,2,3]);
    });
});

describe('map', () =>  {
    it('iterates though an array and builds off of it forming a new one', () => {
        const array = [1, 2, 3];
        const length = arravy.map(array, function(int,index) {
            multiplyer = int * 2;
            newArray[index] = multiplyer


        });
        assert.deepEqual(newArray,[2,4,6]);

    });
});

// describe('filter(array, callback)', () =>  {
//     it('adds and returns new length', () => {
//         const array = [1, 2, 3];
//         const length = arravy.push(array, 4);
//         assert.equal(length, 4);
//         assert.equal(array[3], 4);
//     });
// });

// describe('reduce(array, callback [, initialValue])', () =>  {
//     it('adds and returns new length', () => {
//         const array = [2, 0, 3];
//         const length = arravy.push(array, 4);
//         assert.equal(length, 4);
//         assert.equal(array[3], 4);
//     });
// });

// describe('findIndex(array, callback)', () =>  {
//     it('adds and returns new length', () => {
//         const array = [1, 2, 3];
//         const length = arravy.push(array, 4);
//         assert.equal(length, 4);
//         assert.equal(array[3], 4);
//     });
// });

// describe('every(array, callback)', () =>  {
//     it('adds and returns new length', () => {
//         const array = [1, 2, 3];
//         const length = arravy.push(array, 4);
//         assert.equal(length, 4);
//         assert.equal(array[3], 4);
//     });
// });
