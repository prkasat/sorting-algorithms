class Heap {
	constructor(compareFn, arr) {
		if (Array.isArray(compareFn)) {
			arr = compareFn;
			compareFn = inputArr;
		}
		
		this.a = arr || [];
		this.n = arr.length || 0;
		this.compareFn = compareFn || this.defaultCompareFn;
		
		if (this.n > 0) {
			this.buildHeap();
		}
	}
	insert(x) {
		this.a[this.n] = x;
		this.swim(this.n);
		this.n++;
	}
	remove() {
		let e = this.a[0];
		this.swap(0, this.n-1);
		this.n -= 1;
		this.sink(0);
		return e;
	}
	swim(k) {
		while(k > 0 && this.compareFn(this.a[this.parent(k)], this.a[k]) < 0) {
			let j = this.parent(k);
			this.swap(k, j);
			k = j;
		}
	}
	sink(k) {
		while (this.leftChild(k) < this.n) {
			let j = this.leftChild(k);
			
			if (j+1 < this.n && this.compareFn(this.a[j+1], this.a[j]) > 0) {
				j ++;
			}
			
			if (this.compareFn(this.a[k], this.a[j]) >= 0) {
				break;
			}
			
			this.swap(k, j);
			k = j;
		}
	}
	leftChild(i) {
		return (i * 2) + 1;
	}
	parent(i) {
		return Math.floor((i-1)/2);
	}
	isEmpty() {
		return this.n === 0;
	}
	size() {
		return this.n;
	}
	swap(i, j) {
		let temp = this.a[i];
		this.a[i] = this.a[j];
		this.a[j] = temp;
	}
	defaultCompareFn(a, b) {
		return a - b; // maxHeap
	}
	buildHeap() {
		// linear time procedure for building heap
		for(let k = this.parent(this.n-1); k >= 0; k--) {
			this.sink(k);
		}
	}
}

function heapSort(array) {
  // Write your code here.
	// converting between min and max heap can be done by using comparators
	const heap = new Heap((a,b) => a-b, array); // maxHeap
	// const heap = new Heap((a,b) => b-a, array); // minHeap
	
	// for (let num of array) {
	// 	heap.insert(num); // takes nlogn time, can use build heap instead to build heap in linear time
	// }
	
	// const result = [];
	while (heap.size() > 0) {
		// result.unshift(heap.remove()); // max heap
		// result.push(heap.remove()); // min heap
		heap.remove(); // no result array ? then this is a inplace heap sort
	}
	
	return heap.a;
}


// Do not edit the line below.
exports.heapSort = heapSort;
