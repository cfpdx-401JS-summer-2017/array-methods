const methods = {};

methods.foreach = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
};

methods.map = (array, callback) => {
    const mappedArray = [];
    for (let i = 0; i < array.length; i++) {
        mappedArray[i] = callback(array[i], i);
    }
    return mappedArray;
};

methods.filter = (array, callback) => {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i], i)) {
            filteredArray[filteredArray.length] = array[i];
        }
    }
    return filteredArray;
};

methods.reduce = (array, callback, initValue) => {
    // if initValue was not provided, then use the first item in the array to start totalling up
    const noInit = initValue === undefined;
    if(noInit) initValue = array[0];

    let accumulator = initValue;
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i)) {
            accumulator = accumulator + array[i];
        }
    }
    return accumulator;
};

module.exports = methods;
