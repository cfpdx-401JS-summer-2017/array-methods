function myMap(array, callback) {
    const newArray = [];
    for (let i=0; i<array.length; i++) {
        newArray[i] = callback(array[i]);
    }
    console.log('newArray = '+newArray);
    return newArray;
}
module.exports = myMap;