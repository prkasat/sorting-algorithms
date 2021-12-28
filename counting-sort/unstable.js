function sort(arr, range) {
  const freqArr = new Array(range).fill(0);

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    freqArr[num] ++;
  }

  let k = 0;
  for (let i=0; i < freqArr.length; i++) {
    const frequency = freqArr[i];
    for (let j=0; j < frequency; j++) {
      arr[k] = i;
      k++;
    }
  }
}

const arr = [92, 22, 1, 34, 5, 22, 92, 104, 9, 22, 23, 24, 11, 2, 8,100];
const range = 200;

sort(arr, range);
console.log(arr);


