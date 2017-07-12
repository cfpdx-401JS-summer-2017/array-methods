function reduce(array, callback) {
    var newValue = 0;
    for (let i=0; i<array.length; i++) {
        newValue += callback(array[i]);
    }
    return newValue;
}
module.exports = reduce;