function everyItem(array, callback) {
    let returnedVal = true;
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (!callback(item, i)) {
            returnedVal = false;
            break;
        }
    }
    return returnedVal;
}


module.exports = everyItem;