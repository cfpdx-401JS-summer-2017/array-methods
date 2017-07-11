// function
function push(array, item) {
  array[array.length] = item;
  return array.length;
};

function forEach(array, callback) {
  for (i = 0; i < array.length; i++) {
      callback(array[i], i);

  }
};
console.log(forEach());

function map(array, callback) {
  for (i = 0; i < array.length; i++) {
    callback(array)
  }
  array[array.length] = item;

  return ;
};
// function filter(array, callback) {
//   array[array.length] = item;
//   return array.length;
// };

// function reduce(array, callback [, initialValue]) {
//   array[array.length] = item;
//   return array.length;
// };

// function findIndex(array, callback) {
//   array[array.length] = item;
//   return array.length;
// };

// function every(array, callback) {
//   array[array.length] = item;
//   return array.length;
// };

module.exports = {
    push, 
    forEach,
    map
};