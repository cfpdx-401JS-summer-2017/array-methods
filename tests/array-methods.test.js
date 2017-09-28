const assert = require('assert');
const push = require('../src/push');
const forEach = require('../src/forEach');
const filter = require('../src/filter');
const map = require('../src/map');

describe('push', () => {
  it.only('adds and returns new length', () => {
    const array = [1, 2, 3];
    const length = push(array, 4);
    assert.equal(length, 4);
    assert.equal(array[3], 4);
  });

  it.only('add and return the forEach', () => {
    const items = [1, 4, 7, 10];
    const solution = [];
    const stuff = function(x) {
      solution.push(x + x);
    };
    forEach(items, stuff);
    assert.deepEqual(solution, [2, 8, 14, 20]);
  });

  it.only('filters', () => {
    const elements = [4, 5, 10, 11];
    const callback = function(x) {
      if(x < 6) {
        return x;
      }
    };
    assert.deepEqual(filter(elements, callback), [4, 5]);
  });

  it.only('does the map', () => {
    const array = [3, 5, 7, 8];
    const thing = function(x) {
      return x * x;
    };
    assert.deepEqual(map(array, thing), [9, 25, 49, 64]);
  });

  it('does the reduce', () => {

  });

  it('finds the index', () => {

  });

  it('does the every', () => {

  });
});