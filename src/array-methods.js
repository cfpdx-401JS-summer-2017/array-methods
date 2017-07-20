function forEach(arr) {
  // return forEachArray;
}
// all these need for loops on arrays and no callbacks -

function map(arr, fn) {
  const mapped = [];
  for (var i = 0; i < arr.length; i++) {
    mapped[i] = fn(arr[i]);
  }
  return mapped;
}

function filter(arr) {
  const trueValue = [];
  for (var i = 0; i < arr.length; i++) {
    if (Boolean(arr[i]) === true) {
      trueValue.push(arr[i]);
    }
  }
  return trueValue;
}

function reduce(arr, acc, fn) {
  let fibArray = [];
  fibArray = fn(arr);
  return fibArray;
}

function findIndex(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr.hasOwnProperty(i)) {
      return;
    }
  }
}

module.exports = {
  // forEach,
  map,
  filter,
  reduce,
  findIndex
};
