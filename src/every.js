
function everyItem(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (callback(item, i)) {
            //fix this
        } else {
            return false;
        }
    }
    return true;
}


module.exports = everyItem;