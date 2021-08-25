// optimzation to copy + shift instead of swap
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
	let nth = a[n]; // keep a copy of n
	j = n-1;
	while (j >=0 && a[j] > nth) {
		a[j+1] = a[j]; // shift greater elements to right
		j --;
	}
	
	// copy nth element its correct place
	a[j+1] = nth;
}

function swap(array, i, j) {
	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}
