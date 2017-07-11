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


module.exports = {
 forEach,
  map,
  filter
}
