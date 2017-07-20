// functions

  function push(array, item) {
    array[array.length] = item;
    return array.length;
  };

  function forEach(array, callback) {
    for (i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
  };

  function map(array, callback) {
    const mapped = [];
    for(let i = 0; i < array.length; i++) {
        mapped[i] = callback(array[i], i);
    }
    return mapped;
}
    
  function filter(array, callback) {
    const filtered = [];
    for(let i = 0; i < array.length; i++) {
        const arrayPice = array[i];
        if(callback(arrayPice, i)) {
            filtered[filtered.length] = arrayPice;
        }
    }
    return filtered;
};

  function reduce(array, callback, initialValue) {
    const lostInit = initialValue === undefined;
    if(lostInit) initialValue = array[0];

    let accumulator = initialValue;
    for(let i = lostInit ? 1 : 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i);
    };
    return accumulator;
};

function findIndex(array, callback) {
    for(let i = 0; i < array.length; i++) {
       if (callback(array[i],i) == true) return i;
    }
  };

  
function every(array, callback) {
    for(let i = 0; i < array.lenth; i++){
        if (callback(array[i],i)!== true) {
            return false;
        }
    }
return true;
};

module.exports = {
    push, 
    forEach,
    map,
    filter,
    reduce,
    findIndex,
    every
};