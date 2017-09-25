function every(array, callback) {

    var falseCount = 0;

    for (let i = 0; i < array.length; i++) {
        var item = array[i];
        var index = i;
       
        if (callback(item, index) !== true) {
            ++falseCount;
        }
    }

    if (falseCount > 0) {
        return false;
    } else {
        return true;
    }
}

module.exports = every;