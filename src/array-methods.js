function forEachMethod(array, callback) {
    for (var j = 0; j < array.length; j++){
        callback(array[j], j);
    }
}

function mapMethod(array, callback) {
    
}

module.exports = {
    forEachMethod,
    mapMethod
    // filterMethod,
    // reduceMethod,
    // findIndexMethod,
    // everyMethod
};