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
    this.root = this.buildTree(array);
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

  levelOrder(result = [], queue = [], root = this.root) {
    if (root === null) return;

    result.push(root.value);

    // Add root's left and right children to queue
    queue.push(root.left);
    queue.push(root.right);

    // Move to next level
    while (queue.length) {
      const level = queue[0];
      queue.shift();
      this.levelOrder(result, queue, level);
    }

    return result;
  }

  inorder(array = [], root = this.root) {
    if (root === null) return;

    // Traverse left subtree
    if (root.left) this.inorder(array, root.left);

    array.push(root.value);

    // Traverse right subtree
    if (root.right) this.inorder(array, root.right);

    return array;
  }

  preorder(array = [], root = this.root) {
    if (root === null) return;

    array.push(root.value);

    // Traverse the left subtree
    if (root.left) this.preorder(array, root.left);

    // Traverse the right subTree
    if (root.right) this.preorder(array, root.right);

    return array;
  }

  postorder(array = [], root = this.root) {
    if (root === null) return;

    // Traverse left subtree
    if (root.left) this.postorder(array, root.left);

    // Traverse right subtree
    if (root.right) this.postorder(array, root.right);

    // Visit the root
    array.push(root.value);

    return array;
  }

  height(root = this.root) {
    if (root === null) return 0;

    let lHeight = this.height(root.left);
    let rHeight = this.height(root.right);

    if (lHeight > rHeight) {
      return (lHeight += 1);
    } else {
      return (rHeight += 1);
    }
  }

  depth(node, root = this.root, depth = 0) {
    if (node === null || root === null) return;
    if (node === root) return `Depth: ${depth}`;
    if (node.value < root.value) {
      return this.depth(node, root.left, (depth += 1));
    } else {
      return this.depth(node, root.right, (depth += 1));
    }
  }

  isBalanced(root = this.root) {
    const lHeight = this.height(root.left);
    const rHeight = this.height(root.right);
    const diff = Math.abs(lHeight - rHeight);
    return diff < 2 ? 'true' : 'false';
  }

  rebalance() {
    const inorderedArray = this.inorder();
    this.root = this.buildTree(inorderedArray);
  }
}

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

// ------------------------------------------------------------------
