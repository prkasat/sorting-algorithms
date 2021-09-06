function quickSort(array) {
  quickSortHelper(array, 0, array.length - 1);
  return array;
}

function quickSortHelper(a, start, end) {
  if (start >= end) {
    return;
  }

  const [left, right] = partition(a, start, end);
  quickSortHelper(a, start, left - 1);
  quickSortHelper(a, right + 1, end);
}

function partition(a, start, end) {
  const randIndex = getRandIndex(start, end);
  swap(a, start, randIndex);

  let pivot = a[start];
  let left = start;
  let right = end;
  let i = start + 1;

  while (i <= right) {
    if (a[i] < pivot) {
      swap(a, i, left);
      i++;
      left++;
    } else if (a[i] > pivot) {
      swap(a, i, right);
      right--;
    } else {
      i++;
    }
  }

  return [left, right];
}

function getRandIndex(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function swap(array, i, j) {
	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

const arr = [92, 22, 1, 34, -5, 22, 92, 104, 9, 22, 11, 2, 8,500];
quickSort(arr);
console.log(arr);