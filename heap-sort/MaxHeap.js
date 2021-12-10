class MaxHeap {
  constructor() {
    this.a = [];
    this.n = 0;
  }

  swim(k) {
    while (k > 1 && this.a[Math.floor(k / 2)] < this.a[k]) {
      this.swap(this.a, Math.floor(k / 2), k);
      k = Math.floor(k / 2);
    }
  }

  insert(x) {
    this.n += 1; // start storing elements from first index
    this.a[this.n] = x;
    this.swim(this.n);
  }

  sink(k) {
    while (2 * k <= this.n) {
      let j = 2 * k;
      if (j < this.n && this.a[j] < this.a[j + 1]) {
        j++;
      }

      if (!this.a[k] < this.a[j]) {
        break;
      }

      this.swap(this.a, k, j);
      k = j;
    }
  }

  delMax() {
    let max = this.a[1];
    this.swap(this.a, 1, this.n);
    this.n -= 1;
    this.sink(1);
    this.a[n + 1] = null;
    return max;
  }

  isEmpty() {
    return this.n === 0;
  }

  size() {
    return this.n;
  }

  swap(a, i, j) {
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
}