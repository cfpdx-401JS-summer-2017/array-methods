const assert = require('assert');
const push = require('../src/push');
const forEach = require('../src/forEach');
const filter = require('../src/filter');
const map = require('../src/map');
const every = require('../src/every');
const reduce = require('../src/reduce');
const findIndex = require('../src/findIndex');

describe('push', () => {
  it('adds and returns new length', () => {
    const array = [1, 2, 3];
    const length = push(array, 4);
    assert.equal(length, 4);
    assert.equal(array[3], 4);
  });

  it('add and return the forEach', () => {
    const items = [1, 4, 7, 10];
    const solution = [];
    const stuff = function(x) {
      solution.push(x + x);
    };
    forEach(items, stuff);
    assert.deepEqual(solution, [2, 8, 14, 20]);
  });

  it('filters', () => {
    const elements = [4, 5, 10, 11];
    const callback = function(x) {
      if(x < 6) {
        return x;
      }
    };
    assert.deepEqual(filter(elements, callback), [4, 5]);
  });

  it('does the map', () => {
    const array = [3, 5, 7, 8];
    const thing = function(x) {
      return x * x;
    };
    assert.deepEqual(map(array, thing), [9, 25, 49, 64]);
  });

  it('does the reduce', () => {
    const array = [20, 30, 70, 60];
    const callFunc = function(sum, value) {
      return sum + value;
    };
    assert.deepEqual(reduce(array, callFunc), [ , 45, 85, 75]);
  });

  it('finds the index', () => {
    const array = [90, 3, 12, 25, 17, 79];
    const thing = function(win){
      return win <= 17;
    };
    assert.equal(findIndex(array, thing), 1);
  });

  it('does the every', () => {
    const arr = [1, 2, 3, 4, 5];
    const stuff = function(x) {
      return x > 2;
    };
    assert.equal(every(arr, stuff), true);
  });
});