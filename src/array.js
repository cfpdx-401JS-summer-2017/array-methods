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

function reduce(array, callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < array.length; i++) {
        if(i === 0 && arguments.length < 3) {
            accumulator = array[0];
        }
        else if (array[i] !== undefined) {
            accumulator = callback(accumulator, array[i], i);
        }
    }
    return accumulator;
}

function findIndex(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] !== undefined) {
            if(callback(array[i], i)) {
                return i;
            }
        }
    }
}

function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] !== undefined) {
            if(!callback(array[i], i)) {
                return false;
            }
        }
    }
    return true;
}

module.exports = {
    forEach,
    map,
    filter,
    reduce,
    findIndex,
    every
};