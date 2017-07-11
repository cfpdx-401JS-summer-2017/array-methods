var accumulator = 0;

function reduce(array, callback) {



    for (i = 0; i < array.length; i++) {
        var item = array[i];
        var index = i;

    }

    callback(accumulator, item, index);

    console.log(index);

}


module.exports = reduce;