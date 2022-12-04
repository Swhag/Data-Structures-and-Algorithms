import BinaryTree from './binary-tree.js';
import printTree from './printTree.js';

let testArray = [72, 5, 8, 4, 3, 2, 9, 1, 43, 7];
let testArray2 = [5, 4, 3, 2, 1];
let testArray3 = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const bst = new BinaryTree(testArray2);

bst.insert(15);
// bst.delete(9);
printTree(bst.root);

// console.log(bst.levelOrder());
// console.log(bst.inorder());
// console.log(bst.preorder());
// console.log(bst.postorder());

console.log(bst.height());
console.log(bst.depth(bst.find(15)));

// bst.rebalance();
// printTree(bst.root);
// console.log(bst.isBalanced());
