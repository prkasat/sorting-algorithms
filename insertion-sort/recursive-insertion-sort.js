function insertionSort(array) {
  // Write your code here.
	insertionSortHelper(array, array.length - 1);
	
	return array;
}

function insertionSortHelper(a, n) {
	if (n <= 0) {
		return;
	}
	
	insertionSortHelper(a, n-1);
	
	// put n in it's correct place
	j = n-1;
	while (j >=0 && a[j] > a[j+1]) {
		swap(a, j, j+1);
		j --;
	}
}

function swap(array, i, j) {
	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

