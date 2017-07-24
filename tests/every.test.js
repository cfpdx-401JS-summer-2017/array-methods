const assert = require('assert');
const every = require('../src/every');

describe('every library', () => {
    it('returns true if callback returns true for every item in the array ', () => {
        let arr = ['dogs', 'do', 'dances'];
        function startsWithD(string) {
            return string.startsWith('d');
        }
        let result = every(arr, startsWithD);
        assert.equal(result, true);
    });
    it('returns false if callback returns false for at least one item in the array', () => {
        let array = ['baby', 'pandas', 'bounce'];
        function startsWithB(str) {
            return str.startsWith('b');
        }
        let res = every(array, startsWithB);
        assert.equal(res, false);
    });
});
