function reduce(array, callback, initialValue) {
    let accumulator = initialValue;
    for ( let i = 0; i < array.length; i++ ){
        if(i === 0 && arguments.length < 3 ){
            accumulator = array[0];
        }
        else if(array[i] !== undefined ){
            accumulator = callback(accumulator, array[i], i);
        }
    }
    return accumulator;
}

module.exports = reduce;