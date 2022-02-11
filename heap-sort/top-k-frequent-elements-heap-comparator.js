const minHeap = {
  init(compareFn) {
    this.a = [];
    this.n = 0;
    this.compareFn = compareFn;
  },
  insert(x) {
    this.a[this.n] = x;
    this.swim(this.n);
    this.n++;
  },
  swim(k) {
    while (k > 0 && this.compareFn(this.a[this.parent(k)], this.a[k]) > 0) {
      this.swap(this.a, k, this.parent(k));
      k = this.parent(k);
    }
  },
  sink(k) {
    while (this.leftChild(k) < this.n) {
      let j = this.leftChild(k);
      if (j + 1 < this.n && this.compareFn(this.a[j+1], this.a[j]) < 0) {
        j++;
      }

      if (this.compareFn(this.a[k], this.a[j]) <= 0) {
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

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const heap = Object.create(minHeap);
    heap.init((a, b) => a[1] - b[1]);
    
    const freqMap = new Map();
    for (let i = 0; i < nums.length; i ++) {
        const prevFreq = freqMap.get(nums[i]) || 0;
        freqMap.set(nums[i], prevFreq + 1);
    }
    
    const a = [...freqMap.entries()];
    const n = a.length;
    
    for (let i = 0; i < a.length; i ++) {
        heap.insert(a[i]);
        
        if (heap.size() > k) {
            heap.remove();
        }
    }
    
    const result = [];
    while (heap.size() > 0) {
        result.push(heap.remove()[0]);
    }
    
    return result;
};