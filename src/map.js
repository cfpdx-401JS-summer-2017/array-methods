function map(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        return callback(array[i]);
    }
}

module.exports = map;