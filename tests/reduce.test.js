const assert = require('assert');
const myReduce = require('../src/reduce');


//see array methods examples in class 2 npm tests folder

// describe('applies accumulator to each index and reduces to single value', () => {
//     it('applies accumulator to each index and reduces to single value', () => {
//         const testArray = [1,2,3];

//         function testCallback(item, accumulator) {
//             accumulator = 0;
//             for (let i = 0; i < testArray.length; i++) {
//                 item = testArray[i+1];
//                 let reduceValue = testArray[i] += item;
//                 accumulator += reduceValue;
//             }
//             return accumulator;
//         }

//         myReduce(testArray, testCallback);
//         assert.deepEqual(myReduce, []);
//     });
// });


//class example
describe('array methods', () => {
    it ('reduce', () => {
        const array = [1,2,3];
        const sum = myReduce(array, (total, x) => total + x, 0);
        assert.deepEqual(sum, 6);

    });
});