
//FINISH THIS ONE
function findIndex(array, callback) {

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i],i)) {
            return array[i];
        } else {
            return -1;
        }
    }
}

module.exports = findIndex;