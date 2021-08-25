function insertionSort(array) {
  // Write your code here.
	let n = array.length;
	
	if (n <=1) {
		return;
	}
	
	for (let i = 1; i < n; i ++) {
		// put ith element in it's correct place
		let ith = array[i];
		let j = i - 1;
		while (j >= 0 && array[j] > ith) {
			array[j+1] = array[j];  // right shift
			j --;
		}
		
		array[j+1] = ith;
	}
}