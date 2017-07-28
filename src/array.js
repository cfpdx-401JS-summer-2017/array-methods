function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}

function map(array, callback) {
    let second = [];
    for (let i = 0; i < array.length; i++) {
        second.push(callback(array[i], i));
    }
    return second;
}

function filter(array, callback) {
    let second = [];
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i])){
            second[second.length] = array[i];
        }
    }
    return second;
}

module.exports = {
    forEach,
    map,
    filter
};