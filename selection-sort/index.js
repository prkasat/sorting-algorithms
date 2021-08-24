const assert = require('assert').strict;

function selectionSort(array) {
  if (array.length <= 1) {
    return;
  }
  
	for (let i = 0; i < array.length; i ++) {
		let min = i;
		
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[min]) {
				min = j;
			}
		}
		
		swap(array, i, min);
	}
}

function swap(array, i, j) {
	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

const input = [8, 5, 2, 9, 5, 6, 3];
const expected = [2, 3, 5, 5, 6, 8, 9];

selectionSort(input);

assert.deepEqual(input, expected);
console.log('sorted', input);





