function forEachMethod(array, callback) {
    for (let j = 0; j < array.length; j++){
        callback(array[j], j);
    }
}

function mapMethod(array, callback) {
    let mappedArray = [];
    for (let i = 0; i < array.length; i++) {
        mappedArray.push(callback(array[i], i));
    }
    return mappedArray;
}

function filterMethod(array, callback){
    let filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) == true) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}

function reduceMethod(array, callback, initial) {
    let accumulator = initial;

    for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i);
    }
    return accumulator;
}

function findIndexMethod(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i) == true) return i;
    }
}

function everyMethod(array, callback) {
    
}

module.exports = {
    forEachMethod,
    mapMethod,
    filterMethod,
    reduceMethod,
    findIndexMethod,
    everyMethod
};