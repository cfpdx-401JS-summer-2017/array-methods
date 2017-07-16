const arrayObj = {};

arrayObj.forEach = (arr, callback) => {
  for(let i=0; i < arr.length; i++){
    callback(arr[i], i);
  }
};

arrayObj.map = (arr, callback) => {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray[i] = callback(arr[i], i);
  }
  return newArray;
};

arrayObj.filter = (arr, callback) => {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i)){
      newArray.push(arr[i]);
    } 
  }
  return newArray;
};

arrayObj.reduce = (arr, callback, initialValue = 0) => {
  for (let i = 0; i < arr.length; i ++) {
    initialValue += callback(initialValue = initialValue || (arr[0]), arr[i], i);
  }
  return initialValue;
};

arrayObj.findIndex = (arr, callback) => {
  
};

module.exports = arrayObj;