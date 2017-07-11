// tests
const arravy = require('../src/arravy');
var assert = require('assert');

describe('push', () =>  {
    it('adds and returns new length', () => {
        const array = [1, 2, 3];
        const length = arravy.push(array, 4);
        assert.equal(length, 4);
        assert.equal(array[3], 4);
    });
});