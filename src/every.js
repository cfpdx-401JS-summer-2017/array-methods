function every(array, callback) {
    var status = true;
    for (let i=0; i<array.length; i++) {
        if (!callback(array[i])) {
            status = false; 
        }
    }
    return status;
}
module.exports = every;