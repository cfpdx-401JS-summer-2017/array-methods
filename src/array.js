function forEach(array, callback) {
    for (var i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}

function map(array, callback) {
    var second = [];
    for (var i = 0; i < array.length; i++) {
        second.push(callback(array[i], i));
    }
    return second;
}

module.exports = {
    forEach,
    map
};