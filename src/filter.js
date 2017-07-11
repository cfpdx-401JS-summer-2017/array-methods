function filter(array, callback) {
    const newArray = [];
    var counter = 0;
    for (let i=0; i<array.length; i++) {
        if(callback(array[i])) {
            newArray[counter] = array[i];
            counter++;
        }
    }
    return newArray;
}
module.exports = filter;