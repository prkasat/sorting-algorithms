const minHeap = {
  init() {
    this.a = [];
    this.n = 0;
  },
  insert(x) {
    this.a[this.n] = x;
    this.swim(this.n);
    this.n++;
  },
  swim(k) {
    while (k > 0 && this.a[this.parent(k)] > this.a[k]) {
      this.swap(this.a, k, this.parent(k));
      k = this.parent(k);
    }
  },
  sink(k) {
    while (this.leftChild(k) < this.n) {
      let j = this.leftChild(k);
      if (j + 1 < this.n && this.a[j + 1] < this.a[j]) {
        j++;
      }

      if (this.a[k] <= this.a[j]) {
        break;
      }

      this.swap(this.a, k, j);
      k = j;
    }
  },
  parent(k) {
    return Math.floor((k - 1) / 2);
  },
  leftChild(k) {
    return 2 * k + 1;
  },
  rightChild(k) {
    return 2 * k + 2;
  },
  remove() {
    let min = this.a[0];
    this.swap(this.a, 0, this.n - 1);
    this.n -= 1;
    this.sink(0);
    return min;
  },
  swap(a, i, j) {
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  },
  size() {
    return this.n;
  },
};

var findKthLargest = function (nums, k) {
  minHeap.init();

  for(let i = 0; i < nums.length; i ++) {
      minHeap.insert(nums[i]);
      if (minHeap.size() > k) {
         console.log('minHeap', minHeap.a);
          minHeap.remove();
      }
  }

  return minHeap.remove();
};

// minHeap.init();
// minHeap.insert(3);
// minHeap.insert(2);
// // minHeap.insert(1);

// console.log('minheap', minHeap);

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
