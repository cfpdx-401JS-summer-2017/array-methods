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

methods.findindex = (array, callback) => {
    const found = [];
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i], i)) {
            found.push(i);
        }
    }
    // console.log('results array', found);
    const result = found.length === 0 ? -1 : found[0];
    // console.log('result', result);
    return result;
};

methods.every = (array, callback) => {
    const matches = [];
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i], i)) {
            matches.push(i);
        }
    }
    // console.log('matches array', matches);
    const result = matches.length === array.length ? true : false;
    // console.log('result', result);
    return result;
};

module.exports = methods;
