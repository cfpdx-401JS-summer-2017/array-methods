function every(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    if(!callback(arr[i])) 
      return true;
  }
  return false;
}  

module.exports = every;