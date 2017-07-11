const methods = {};
// push
methods.push = function(array, item) {
    array.push(item);
    return array.length;
};
// for each
methods.foreach = function(array) {
    const numbers = [];
    array.forEach(function(x) {
        if(Number.isInteger(x)) {
            numbers.push(x);
        }
    });
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

module.exports = methods;