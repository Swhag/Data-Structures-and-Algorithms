// ------------------------------------------------------------------
// Useful functions for Binary Search Tree
// ------------------------------------------------------------------

function removeDuplicates(array) {
  return [...new Set(array)];
}

const mergeSort = (arr) => {
  if (arr.length === 0)
    return console.error('Please provide a non-empty array');
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

// Searches the Right child's left most child node (minimum value)
function minValue(root) {
  let min = root.value;

  while (root.left != null) {
    min = root.left.value;
    root = root.left;
  }

  return min;
}

function printTree(node, prefix = '', isLeft = true) {
  if (node.right !== null) {
    printTree(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
  if (node.left !== null) {
    printTree(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
}

// ------------------------------------------------------------------

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export default class BinaryTree {
  constructor(array) {
    this.array = [...removeDuplicates(mergeSort(array))];
    this.root = this.buildTree(this.array);
  }

  buildTree(array, start = 0, end = array.length - 1) {
    if (start > end) return null;

    let mid = parseInt((start + end) / 2);
    let root = new Node(array[mid]);

    root.left = this.buildTree(array, start, mid - 1);
    root.right = this.buildTree(array, mid + 1, end);

    return root;
  }

  insert(value, root = this.root) {
    if (root === null) return new Node(value);
    if (root.value === value) return;

    if (value < root.value) {
      root.left = this.insert(value, root.left);
    } else {
      root.right = this.insert(value, root.right);
    }

    return root;
  }

  delete(value, root = this.root) {
    if (root == null) {
      return root;
    }

    // Traverse down the tree
    if (root.value > value) {
      root.left = this.delete(value, root.left);
    } else if (root.value < value) {
      root.right = this.delete(value, root.right);
    }
    // Value matches -> delete node and update pointers
    else {
      // condition 1: Node has only one child
      if (root.left == null) {
        return root.right;
      } else if (root.right == null) {
        return root.left;
      }
      // condition 2: Node has two children
      else {
        root.value = minValue(root.right);
        root.right = this.delete(root.value, root.right);
      }
    }

    return root;
  }

  find(value, root = this.root) {
    if (root === null || root.value === value) {
      return root;
    }

    // Traverse down the tree until value is found
    if (value < root.value) {
      return this.find(value, root.left);
    }
    return this.find(value, root.right);
  }

  levelOrder(root = this.root) {
    const queue = [root];
    const result = [];

    if (root == null) return;

    while (queue.length > 0) {
      let current = queue.shift(root);
      result.push(root.value);

      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
    }

    return result;
  }
}
// ------------------------------------------------------------------

let testArray = [72, 5, 8, 4, 3, 2, 9, 1, 43, 7];
let testArray2 = [5, 4, 3, 2, 1];
let testArray3 = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const bst = new BinaryTree(testArray);

bst.insert(15);
// bst.delete(9);
console.log(bst.levelOrder());

printTree(bst.root);
console.log(bst.root);
