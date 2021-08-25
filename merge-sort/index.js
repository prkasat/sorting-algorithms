function mergeSort(array) {
  // Write your code here.
	mergesortHelper(array, 0, array.length - 1);
	return array;
}

function mergesortHelper(a, start, end) {
	if (start >= end) return;
	
	let mid = Math.floor((start + end) / 2);
	
	mergesortHelper(a, start, mid); // left half
	mergesortHelper(a, mid+1, end); // right half
	merge(a, start, mid, end); // merge
}

function merge(a, start, mid, end) {
  const aux = [];
	let i = start;
	let j = mid + 1;

	while (i <= mid && j <= end) {
		if (a[i] <= a[j]) { // <= for stability
			aux.push(a[i]);
			i++;
		} else {
			aux.push(a[j]);
			j++;
		}
	}
	
	while (i <= mid) {
    aux.push(a[i]);
    i++;
	}
	
	while (j <= end) {
    aux.push(a[j]);
    j++;
	}
	
	for (let k = 0; k < aux.length; k++) {
		a[k + start] = aux[k];
	}
}

