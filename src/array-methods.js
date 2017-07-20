function forEach(arr) {
  const eachArray = [];
  for (var i = 0; i < arr.length; i++) {
    eachArray[i] = arr[i];
  }
  return eachArray;
}

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

function findIndex(arr, fn) {
  let indexOfTrue = [];
  indexOfTrue = fn(arr);
  return indexOfTrue;
}

function every(arr, fn) {
  let truthFlag = true;
  for (var i = 0; i < arr.length; i++) {
    if (Boolean(arr[i]) === false) {
      truthFlag = false;
    }
  }
  return truthFlag;
}

module.exports = {
  forEach,
  map,
  filter,
  reduce,
  findIndex,
  every
};
