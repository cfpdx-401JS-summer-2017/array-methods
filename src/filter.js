function filter(elements, callback) {
  const other = [];
  for (let i = 0; i < elements.length; i++) {
    if(callback(elements[i])) {
      other[other.length] = elements[i];
    }
  }
  return other;
}
  
module.exports = filter;