function findIndex(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== undefined) {
            if (callback(array[i], i)) {
                return i;
            }
        }
    }
}

module.exports = findIndex;