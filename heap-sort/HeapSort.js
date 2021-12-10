function heapSort(a) {
  let n = a.length;

  buildHeap(a, n);

  console.log('build', ...a);

  // sort down, remove max one at a time and leave in array instead of nulling out
  let k = n;
  while (k > 1) {
    swap(a, 0, k-1);
    k -= 1;
    sink(a, 0, k);
  }

  return a;
}

function buildHeap(a, n) {
  for (let k = parent(n-1); k >= 0; k--) {
    sink(a, k, n);
  }
}

function sink(a, k, n) {
  while (leftChild(k) < n) {
    let j = leftChild(k);
    if (j+1 < n && a[j] < a[j+1]) {
      j++;
    }

    if (a[k] >= a[j]) {
      break;
    }

    swap(a, k, j);
    k = j;
  }
}

function leftChild(i) {
  return (i * 2) + 1;
}

function rightChild(i) {
  return (i * 2) + 2;
}

function parent(i) {
  return Math.floor((i - 1) / 2);
}

function swap(a, i, j) {
  let temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}


(function run() {
  // let arr = [2, 1, 3, 7, 9, 6, 15, 12];
  // let arr = [3, 2, 4, 7, 5];
  let arr = [8, 5, 2, 9, 5, 6, 3];
  console.log('sorted order', ...heapSort(arr));
})();

