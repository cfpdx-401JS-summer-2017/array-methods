const arrayObj = {};

arrayObj.forEachLoop = (arr, callback) => {
  for(let i=0; i < arr.length; i++){
    callback(arr[i], i);
  }
};

arrayObj.mapArray = (arr, callback) => {
  
}




module.exports = arrayObj;