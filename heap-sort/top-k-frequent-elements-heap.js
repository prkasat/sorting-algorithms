 const minHeap = {
  init() {
      this.n = 0;
      this.a = [];
  },
  insert(x) {
      this.a[this.n] = x;
      this.swim(this.n);
      this.n++;
  },
  swim(k) {
      while (k > 0 && getFrequency(this.a, k) < getFrequency(this.a, this.parent(k))) {
          swap(this.a, k, this.parent(k));
          k = this.parent(k);
      }
  },
  sink(k) {
      while (this.leftChild(k) < this.n) {
          let j = this.leftChild(k);
          if (j + 1 < this.n && getFrequency(this.a, j + 1)  < getFrequency(this.a, j)) {
              j ++;
          }
          
          if (getFrequency(this.a, k) <= getFrequency(this.a, j)) {
              break;
          }
          
          swap(this.a, k, j);
          k = j;
      }
  },
  remove() {
      let min = this.a[0];
      swap(this.a, 0, this.n - 1);
      this.n -= 1;
      this.sink(0);
      return min;
  },
  size() {
      return this.n;
  },
  leftChild(k) {
      return 2 * k + 1; 
  },
  parent(k) {
      return Math.floor((k - 1) / 2);
  }
};

 var topKFrequent = function(nums, k) {
  const freqMap = new Map();
  const result = [];
  
  for (let i = 0; i < nums.length; i++) {
      freqMap.set(nums[i], (freqMap.get(nums[i]) || 0) + 1);
  }
  
  const a = [...freqMap.entries()];
  const n = a.length;
  
  minHeap.init();
  
  for (let i = 0; i < a.length; i ++) {
      minHeap.insert(a[i]);
      
      if (minHeap.size() > k) {
        minHeap.remove();
      }
  } 

  while (minHeap.size() > 0) {
    result.push(minHeap.remove()[0]);
  }

  return result;
};



function swap(a, i, j) {
  let temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

function getFrequency(a, i) {
  return a[i][1];
}

console.log(topKFrequent([1,1,1,2,2,3], 2));