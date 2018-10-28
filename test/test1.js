var assert = require('assert');
const sumOfOther = require('../sumOfOther.js');

describe('sums', function() {
    it('sum1', function() {
    	const inputArr = sumOfOther([2, 3, 4, 1]);
      assert.deepEqual(inputArr, [8, 7, 6, 9]);
    });

    it('sum2', function() {
    	const inputArr = sumOfOther([5, 8, 12, 42, 6, 90, 15]);
      assert.deepEqual(inputArr, [173, 170, 166, 136, 172, 88, 163]);
    });

    it('sum3', function() {
    	const inputArr = sumOfOther([0, 0, 0, 0]);
      assert.deepEqual(inputArr, [0, 0, 0, 0]);
    });
});