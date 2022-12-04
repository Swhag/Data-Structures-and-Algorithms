export default function printTree(node, prefix = '', isLeft = true) {
  if (node.right !== null) {
    printTree(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
  if (node.left !== null) {
    printTree(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
}
