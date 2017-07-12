module.exports = {
    foreach(array, callback) {
        for (let i = 0; i < array.length; i++) {
            callback(array[i], i);
        }
    },
    map(array, callback) {
        const mappedArray = [];
        for (let i = 0; i < array.length; i++) {
            mappedArray[i] = callback(array[i], i);
        }
        return mappedArray;
    },
    filter(array, callback) {
        const filteredArray = [];
        for (let i = 0; i < array.length; i++) {
            if(callback(array[i], i)) {
                filteredArray[filteredArray.length] = array[i];
            }
        }
        return filteredArray;
    }
};
