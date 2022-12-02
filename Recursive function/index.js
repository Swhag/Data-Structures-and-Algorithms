// for loop solution
// ----------------------------------------------------

function sumToForLoop(n) {
  let sum = 0;
  let num = n;

  for (let i = 0; i < n; i++) {
    sum += num;
    num--;
  }
  return sum;
}

// recursive solution
// ----------------------------------------------------

function sumToRecursive(n) {
  if (n <= 0) {
    return n;
  }
  return n + sumToRecursive(n - 1);
}

// arithmetic progression solution
// ----------------------------------------------------

function sumTo(n) {
  return n * ((n + 1) / 2);
}

const x = 5;

console.log(sumToForLoop(x));
console.log(sumToRecursive(x));
console.log(sumTo(x));

// ----------------------------------------------------
// ----------------------------------------------------

function factorialForLoop(n) {
  let total = 1;
  let num = n;

  for (let i = 0; i < n; i++) {
    total *= num;
    num--;
  }
  return total;
}

function factorialRecursive(n) {
  if (n == 1) {
    return n;
  } else {
    return n * factorialRecursive(n - 1);
  }
}

// console.log(factorialForLoop(x));
// console.log(factorialRecursive(x));

// ----------------------------------------------------
// ----------------------------------------------------
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list) {
  console.log(list.value);
  if (list.next) {
    printList(list.next);
  }
}
function printListReverse(list) {
  if (list.next) {
    printList(list.next);
  }
  console.log(list.value);
}

// console.log(printList(list));
// printListReverse(list);

function printList(list) {
  let tmp = list;

  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
}

// printList(list);

// ----------------------------------------------------

let count = 0;

function collatz(n) {
  if (n === 1) {
    return count;
  }
  if (n % 2 == 0) {
    count++;
    return collatz(n / 2);
  } else {
    count++;
    return collatz(3 * n + 1);
  }
}

// console.log(collatz(50));

// ----------------------------------------------------

function power(a, b) {
  if (b == 0) {
    return a;
  }
  return a * power(a, b - 1);
}

// console.log(power(2, 4));
// console.log(power(2, 3));

// ----------------------------------------------------

let nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2',
          },
        },
      },
    },
  },
};

function contains(obj, value) {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      return contains(obj[key], value);
    }

    if (obj[key] === value) {
      return true;
    }
  }
  return false;
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, 'foo'); // false

// console.log(hasIt);
// console.log(doesntHaveIt);

// ----------------------------------------------------

let seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
// console.log(seven);

function totalIntegers(array) {
  if (array.length === 0) return 0;

  let total = 0;
  let first = array.shift();

  if (Array.isArray(first)) {
    total += totalIntegers(first);
  } else if (Number.isInteger(first)) {
    total += 1;
  }

  return total + totalIntegers(array);
}
// ----------------------------------------------------

let l = [1, 2, 3];
console.log(SumSquares(l)); // 14

l = [[1, 2], 3];
console.log(SumSquares(l)); // 14

l = [[[[[[[[[1]]]]]]]]];
console.log(SumSquares(l)); // 1

l = [10, [[10], 10], [10]];
console.log(SumSquares(l)); // 400

function SumSquares(array) {
  let total = 0;

  if (array.length === 0) {
    return 0;
  }

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      total += SumSquares(array[i]);
    } else {
      total += array[i] * array[i];
    }
  }
  return total;
}
