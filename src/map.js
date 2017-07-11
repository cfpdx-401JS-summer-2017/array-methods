function map(array, callback) {

    for (i = 0; i < array.length; i++) {
        var item = array[i];
        var index = i;

        callback(item, index);
    }
}

module.exports = map;