
function everyItem(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (callback(item, i)) {
            return true;
        } else {
            return false;
        }
    }
}


module.exports = everyItem;