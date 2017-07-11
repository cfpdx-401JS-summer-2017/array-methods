function forEachMethod(array, callback) {
    for (let j = 0; j < array.length; j++){
        callback(array[j], j);
    }
}

var mappedArray = [];

function mapMethod(array, callback) {
    for (let i = 0; i < array.length; i++) {
        mappedArray.push(callback(array[i], i));
    }
    return mappedArray;
}

function filterMethod(array, callback){
    
}

module.exports = {
    forEachMethod,
    mapMethod,
    filterMethod
    // reduceMethod,
    // findIndexMethod,
    // everyMethod
};