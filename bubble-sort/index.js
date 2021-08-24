const assert = require('assert').strict;

function bubbleSort(array) {
	let n = array.length;
	
	if (n <= 1) {
		return array;
	}
	
	for (let i = 0;  i < n; i ++) {
		for (let j = n - 1; j > 0; j --) {
			if (array[j-1] > array[j]) {
				swap(array, j-1, j);
			}
		}
	}
	
	return array;
}

function swap(array, i, j) {
	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

const input = [8, 5, 2, 9, 5, 6, 3];
const expected = [2, 3, 5, 5, 6, 8, 9];

bubbleSort(input);

assert.deepEqual(input, expected);
console.log('sorted', input);