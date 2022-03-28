function quickSort(array) {
  // Write your code here.
	helper(array, 0, array.length - 1);
	return array;
}

function helper(a, lo, hi) {
	if (lo >= hi) {
		return;
	}
	
	// 2 way partition
	// const pIndex = hoarePartition(a, lo, hi);
	// helper(a, lo, pIndex - 1);
	// helper(a, pIndex + 1, hi);
	
	// three way partition
	const [left, right] = threeWayPartition(a, lo, hi);
	helper(a, lo, left - 1);
	helper(a, right + 1, hi);
}

function lomutoPartition(a, lo, hi) {
	const randIndex = getRandomIndex(lo, hi);
	swap(a, lo, randIndex);
	
	let pivot = a[lo];
	let smaller = lo;
	
	for (let bigger = lo + 1; bigger <= hi; bigger ++) {
		if (a[bigger] <= pivot) {
			smaller ++;
			swap(a, smaller, bigger);
		}
	}
	
	swap(a, lo, smaller);
	return smaller;
}

function hoarePartition(a, lo, hi) {
	const randIndex = getRandomIndex(lo, hi);
	swap(a, lo, randIndex);
	
	let pivot = a[lo];
	let left = lo;
	let right = hi;
	
	while (left <= right) {
		if (a[left] <= pivot) {
			left ++;
		} else if (a[right] > pivot) {
			right --;
		} else {
			swap(a, left, right);
		}
	}
	
	swap(a, lo, right);	
	return right;
}

function threeWayPartition(a, lo, hi) {
	let randIndex = getRandomIndex(lo, hi);
	swap(a, lo, randIndex);
	
	let pivot = a[lo];
	let lt = lo;
	let gt = hi;
	let i = lo + 1;
	
	while (i <= gt) {
		if (a[i] < pivot) {
			swap(a, lt, i);
			lt ++;
			i ++;
		} else if (a[i] > pivot) {
			swap(a, gt, i);
			gt --;
		} else {
			i ++;
		}
	}
	
	return [lt, gt];
}

function getRandomIndex(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function swap(a, i, j) {
// 	let temp = a[i];
// 	a[i] = a[j];
// 	a[j] = temp;
// }

// shorter swap
function swap(a, i, j) {
	[a[i], a[j]] = [a[j],a[i]]
}

// Do not edit the line below.
exports.quickSort = quickSort;
