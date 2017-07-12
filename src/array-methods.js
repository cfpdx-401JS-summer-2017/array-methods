module.exports = {
    foreach(array, callback) {
        for (let i = 0; i < array.length; i++) {
            callback(array[i], i);
        }
    },
    map(array, callback) {
        const mappedArray = [];
        for (let i = 0; i < array.length; i++) {
            mappedArray[i] = callback(array[i], i);
        }
        return mappedArray;
    }
};

// // map
// methods.map = function(array) {
//     const newArray = [];
//     for (var i = 0; i < array.length; i++) {
//         newArray[i] = array[i];
//     }
//     // console.log(newArray);
//     return newArray.length;
// };
// // filter
// methods.filter = function(array, item) {
//     // const filteredArray = array.filter(function(item) {
//     //     return Number.isInteger(item);
//     // });
//     const filteredArray = [];
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] == item) {
//             // filteredArray
//         }
//     }
//     return filteredArray.length;
// };
// // reduce
// // methods.f
// // find index
// // methods.reduce = function(array, item) {
// //     return array.findIndex(item); 
// // };

// // every

