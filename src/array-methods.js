const methods = {};
// push
methods.push = function(array, item) {
    array.push(item);
    return array.length;
};
// for each
methods.foreach = function(array) {
    const numbers = [];
    for (var i = 0; i < array.length; i++) {
        // console.log(Number.isInteger(array[i]));
        if (Number.isInteger(array[i])) {
            numbers.push(array[i]);
        }
    }
    // console.log('count of numbers in array', numbers.length);
    return numbers.length;
};

// map
methods.map = function(array) {
    const newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray[i] = array[i];
    }
    // console.log(newArray);
    return newArray.length;
};
// filter
methods.filter = function(array) {
    const filteredArray = array.filter(function(item) {
        return Number.isInteger(item);
    });
    return filteredArray.length;
};
// reduce
// methods.f
// find index
// methods.reduce = function(array, item) {
//     return array.findIndex(item); 
// };

// every

module.exports = methods;