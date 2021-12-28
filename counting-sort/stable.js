function sort(arr, range) {
  const freqArr = new Array(range).fill(null).map(a => []);

  for (let i = 0; i < arr.length; i++) {
    const index = arr[i].age;
    freqArr[index].push(arr[i]);
  }

  let k = 0;
  for (let i = 0; i < freqArr.length; i++) { 
    for (let j = 0; j < freqArr[i].length; j++) {
      arr[k] = freqArr[i][j];
      k++;
    }
  }
}


const arr = [
  {age: 92, name: 'john'}, 
  {age: 22, name: 'sam'},
  {age: 1, name: 'ron'},
  {age: 34, name: 'dev'},
  {age: 5, name: 'liam'},
  {age: 22, name: 'david'},
  {age: 92, name: 'jim'},
  {age: 104, name: 'don'},
  {age: 9, name: 'lily'},
  {age: 22, name: 'lulu'}
];

const range = 200;

sort(arr, range);
console.log(arr);
