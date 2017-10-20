function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};

const findLargest = node => {
  if (node.right) {
    return findLargest(node.right);
  } else {
    return node.value;
  }
};

const findSecondLargest = node => {
  if (node.right.right) {
    return findSecondLargest(node.right);
  } else if (node.right.left) {
    return findLargest(node.right.left);
  } else {
    return node.value;
  }
};

let myBinaryTree = new BinaryTreeNode(5);
myBinaryTree.insertLeft(3);
myBinaryTree.left.insertLeft(1);
myBinaryTree.left.insertRight(4);
myBinaryTree.insertRight(8);
myBinaryTree.right.insertLeft(7);
myBinaryTree.right.insertRight(12);
myBinaryTree.right.right.insertLeft(10);
myBinaryTree.right.right.left.insertLeft(9);
myBinaryTree.right.right.left.insertRight(11);

let output = findSecondLargest(myBinaryTree);
console.log(output);