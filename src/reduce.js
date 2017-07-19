function myReduce(array,callback, initialValue) {
    const noInitial = initialValue === undefined;
    if(noInitial) initialValue = array[0];

    let accumulator = initialValue;

    for (let i = noInitial ? 1 : 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i);
    }
    return accumulator;
}

module.exports = myReduce;