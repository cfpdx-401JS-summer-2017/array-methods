function findIndex(array, callback) {
    
    for (let i = 0; i < array.length; i++) {
        var item = array[i];
        var index = i;
        
        if(array.hasOwnProperty(index)) {

            if (callback(item, index) === true) {
                return index;
            }
        }
    }
    return -1;
}
    
module.exports = findIndex;