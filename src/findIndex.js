function findIndex(array, callback){
    for(let i = 0; i < array.length; i++) {
        if(!callback(array[i], i)) {
            return -1;
        }
        return i;
    }
}

module.exports = findIndex;