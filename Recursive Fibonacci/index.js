// const fib = (n) => {
//   const arr = [0, 1];
//   if (n <= 0) return 'Input value cannot be 0.';
//   if (n === 1) return [0];
//   if (n === 2) return arr;
//   for (let i = 2; i < n; i++)
//     arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
//   return arr;
// };

// console.log(fib(8));

// const fibsRecurse = (n) => {
//   return n <= 0
//     ? 'Please enter a valid number of elements to be given an answer.'
//     : n === 1
//     ? [0]
//     : n === 2
//     ? [0, 1]
//     : [
//         ...fibsRecurse(n - 1),
//         fibsRecurse(n - 1)[n - 2] + fibsRecurse(n - 1)[n - 3],
//       ];
// };

// console.log(fibsRecurse(8));

function fib(n) {
  if (n <= 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

console.log(fib(8));
