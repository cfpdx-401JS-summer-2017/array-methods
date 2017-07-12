function forEach(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
}

function map(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
}

function filter(arr, cb){
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
}

function reduce(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    if(arr.hasOwnProperty(i)) {
      cb(arr[i], i);
    }
  }
}

function findIndex(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    if(arr.hasOwnProperty(i)) {
      cb(arr[i], i);
    }
  }
}


module.exports = {
  forEach,
  map,
  filter,
  reduce,
  findIndex
};
