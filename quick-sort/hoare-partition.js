// hoare partition
function quickSort(array) {
  // Write your code here.
	quicksortHelper(array, 0, array.length - 1);
	return array;
}

function quicksortHelper(a, start, end) {
	if (start >= end) {
		return;
	}
	
	const pIndex = partition(a, start, end);
	quicksortHelper(a, start, pIndex - 1);
	quicksortHelper(a, pIndex + 1, end);
}

function partition(a, start, end) {
	// random index for pivot
	const randIndex = getRandIndex(start, end);
	
	// swap random pivot to the start
	swap(a, randIndex, start);
	
	let pivot = a[start];
	let left = start;
	let right = end;
	
	while (left <= right) {
		if (a[left] <= pivot) {
			left ++;
		} else if(a[right] > pivot) {
			right --;
		} else {
			swap(a, left, right);
		}
	}
	
	swap(a, start, right);
	
	return right;
}

function getRandIndex(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function swap(array, i, j) {
	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

// Do not edit the line below.
exports.quickSort = quickSort;
