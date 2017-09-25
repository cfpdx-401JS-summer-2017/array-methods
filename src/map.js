function map(array, callback) {
    var newArray = [];

    for (let i = 0; i < array.length; i++) {
        var item = array[i];
        var index = i;

        if(array.hasOwnProperty(index)) {
            newArray[index] = callback(item, index);
        } else {
            newArray[index] = item;
        }        
    }
    return newArray;
}

module.exports = map;