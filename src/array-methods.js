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
        console.log(Number.isInteger(array[i]));
        if (Number.isInteger(array[i])) {
            numbers.push(array[i]);
        }
    }
    return numbers.length;
};
// map
methods.map = function(array) {
    const newArray = array.map(function(x){
        return x + 1; }
    );
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
// methods.reduce = function(array) {
//     const total = array.reduce(function(acc, item) {
//         return acc + item;
//     });
//     return total;
// };
// find index
// methods.reduce = function(array, item) {
//     return array.findIndex(item); 
// };

// every

module.exports = methods;