function myReduce(array,callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        // initialValue = 0;
        newArray[i] = callback(array[i]);
    }
    return newArray;
}

module.exports = myReduce;