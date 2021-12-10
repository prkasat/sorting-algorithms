function heapSort(array) {
  // Write your code here.
	buildHeap(array);

  console.log('build', array);
	
	for (let i = array.length - 1; i >= 0; i --) {
		removeTop(array, i + 1);
	}
	
	return array;
}

function buildHeap(a) {
	const n = a.length;
	for (let i=Math.floor((n-1)/2); i >=0; i--) {
    console.log('i', i, a[i]);
		heapifyDown(a, n, i);
	}
}

function heapifyDown(a, n, i) {
	const left = leftChild(i);
	const right = rightChild(i);
	
	let largest = i;
	
	if (left < n && a[left] > a[largest]) {
		largest = left;
	}
	
	if (right < n && a[right] > a[largest]) {
		largest = right;
	}
	
	if (largest !== i) {
		swap(a, largest, i);
		heapifyDown(a, n, largest);
	}
}

function removeTop(a, n) {
	const top = a[0];
	
	swap(a, 0, n-1);
	heapifyDown(a, n-1, 0);
	
	return top;
}

function leftChild(i) {
	return (i * 2) + 1;
}

function rightChild(i) {
	return (i * 2) + 2;
}

function parentNode(i) {
	return Math.floor((i - 1) / 2);
}

function swap(array, i, j) {
	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

(function run() {
  // let arr = [2, 1, 3, 7, 9, 6, 15, 12];
  let arr = [3, 2, 4, 7, 5];
  console.log('sorted order', ...heapSort(arr));
})();


// Do not edit the line below.
exports.heapSort = heapSort;
