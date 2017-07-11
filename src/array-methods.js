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




module.exports = arrayObj;