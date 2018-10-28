module.exports = function sumOfOther(arr) {
	let resultSum = [];
	for (let i = 0, len = arr.length; i < len; i++) {
		let sum = (arr.reduce(function(a, b) {return a + b;}) - arr[i]);
		resultSum.push(sum);
	}
	return resultSum;
} 