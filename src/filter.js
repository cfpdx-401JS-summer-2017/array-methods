function filter(array, callback) {
    var newArray = [];
    
    for (let i = 0; i < array.length; i++) {
        var item = array[i];
        var index = i;
                   
        if (callback(item, index) === true) {
            newArray[newArray.length] = item;
        }
    }
    return newArray;
}
    
module.exports = filter;