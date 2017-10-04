function map(array, callback) {
  const otherArr = [];
  for (let i = 0; i < array.length; i++) {
    otherArr[i] = callback(array[i]);
  }
  return otherArr;
}

module.exports = map;