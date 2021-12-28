function countingSort(arr, radix) {
  const buckets = new Array(10).fill(null).map(a => []);
  for (let i = 0; i < arr.length; i ++) {
    const index = Math.floor(arr[i] / 10 ** radix) % 10;
    buckets[index].push(arr[i]);
  }

  let k = 0;
  for (let i = 0; i < buckets.length; i++) {
    for (let j = 0; j < buckets[i].length; j++) {
      arr[k] = buckets[i][j];
      k++;
    }
  }
}

function radixSort(a, digits) {
  for (let i = 0; i < digits; i++) {
    countingSort(a, i);
  }
}


const arr = [21, 345, 13, 12, 101, 101, 99, 50, 234, 1];
const digits = 3;
radixSort(arr, digits);
console.log(arr);