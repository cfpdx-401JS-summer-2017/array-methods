const arrayObj = {};

arrayObj.forEachLoop = (arr, callback) => {
  for(let i=0; i < arr.length; i++){
    callback(arr[i], i);
  }
};

arrayObj.mapArray = (arr, callback) => {
  for (let i = 0; i < arr.lenght; i++) {
    callback(arr[i], i);
    const newArray = [];
    newArray[i] = arr[i];
    return newArray;
  }
};




module.exports = arrayObj;