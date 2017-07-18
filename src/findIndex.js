//ADD INDEXES 

function findIndex(array, callback) {
    let foundIndex = -1;
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            foundIndex = i;
            return foundIndex;
        }
    }
    
}

module.exports = findIndex;