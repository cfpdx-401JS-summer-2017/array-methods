const assert = require('assert');
const arrayObj = require('../src/array-methods');



describe('array methods', () => {
  it ('does something to each item in an array', () => {
    const forEachLooped = arrayObj.forEachLoop();
    assert.equal(forEachLooped, []);

  });


});