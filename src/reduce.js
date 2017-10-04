function reduce(array, callback) {
  var value = 15;
  const newArr = [];
  for(let i = 1; i < array.length; i++) {
    newArr[i] = callback(array[i], value);
  }
  return newArr;
}

module.exports = reduce;