function forEach(arr, checkForHoles) {
  const eachArray = [];
  for (var i = 0; i < arr.length; i++) {
    const tmp = checkForHoles(arr, arr[i], i);
    eachArray[i] = tmp[0];
  }
  return eachArray;
}

function map(arr, checkForHoles) {
  const mapped = [];
  for (var i = 0; i < arr.length; i++) {
    const tmp = checkForHoles(arr, arr[i], i);
    mapped[i] = tmp[0] + 3;
  }
  return mapped;
}

function filter(arr, checkForHoles) {
  const trueValue = [];
  for (var i = 0; i < arr.length; i++) {
    const tmp = checkForHoles(arr, arr[i], i);
    if (Boolean(tmp[0]) === true) {
      trueValue.push(tmp[0]);
    }
  }
  return trueValue;
}

function reduce(arr, acc, fn) {
  let fibArray = [];
  fibArray = fn(arr);
  return fibArray;
}

function findIndex(arr, checkForHoles) {
  let indexOfTrue = [];
  for (var i = 0; i < arr.length; i++) {
    const tmp = checkForHoles(arr, arr[i], i);
    indexOfTrue[i] = tmp[0];
    if (indexOfTrue[i] === true) return i;
  }
  return -1;
}

function every(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (Boolean(arr[i]) === false) {
      return false;
    }
  }
  return true;
}

module.exports = {
  forEach,
  map,
  filter,
  reduce,
  findIndex,
  every
};
