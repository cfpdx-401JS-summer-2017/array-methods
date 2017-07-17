function myFilter(array,callback) {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        
        if(callback(item,i)) {
            filteredArray[filteredArray.length] = item;
        }
    }
    return filteredArray;
}

module.exports = myFilter;