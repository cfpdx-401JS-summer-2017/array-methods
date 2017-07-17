
//REDO THIS ONE, LIKE FILTER BUT RETURNS TRUE OR FALSE

// function myFilter(array,callback) {
//     const filteredArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const item = array[i];
        
//         if(callback(item, i)) {
//             return true;
//         } else {
//             return false;
//         }
//     }
    
// }
function everyItem(array,callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

module.exports = everyItem;