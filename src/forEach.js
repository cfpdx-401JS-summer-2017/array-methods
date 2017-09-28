function forEach(items, callback){
  for (var i=0; i<items.length; i++) {
    callback(items[i], i);
  }
}

module.exports = forEach;