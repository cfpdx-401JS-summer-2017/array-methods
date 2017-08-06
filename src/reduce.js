
function reduce(array, callback, initialValue) {
    var accumulator;
    var item;
    var index = 0;

    if (!initialValue) {
        accumulator = array[0];
        index = 1;
    } else {
        accumulator = initialValue;
        index = 0;
    }


    for (var i = index; i < array.length; i++) {
        if(array.hasOwnProperty(i)) {
            item = array[i];
            accumulator = callback(accumulator, item, index);
        }
    }
    return accumulator;
}


module.exports = reduce;