function myReduce(array,callback, initialValue) {
    let accumulator = initialValue || array[0];

    for (let i = accumulator; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i);
    }
    return accumulator;
}

module.exports = myReduce;