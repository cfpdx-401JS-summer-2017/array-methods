function everyItem(array,callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

module.exports = everyItem;