const methods = {};

methods.push = function(array, item) {
    array.push(item);
    return array.length;
};

module.exports = methods;