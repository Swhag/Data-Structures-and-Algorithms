const mergeSort = (arr) => {
  if (arr.length === 0) return 'Please provide a non empty array!';
  if (arr.length === 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);

  return merge(mergeSort(left), mergeSort(right));
};

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left.slice(), right.slice());
}

// let list1 = [3, 2, 1, 4, 6, 5];
let list1 = ['dog', 'cat', 'boy', 'apple'];

// console.log(mergeSort([])); // []
// console.log(mergeSort([10, 7, 8, 9, 1, 5]));
// console.log(mergeSort([1, 2, 3, 4]));
console.log(mergeSort(list1));

// console.log(list1.sort());
