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

const isValidBinaryTree = root => {
  let nodeAndBoundsStack = [];
  nodeAndBoundsStack.push({node: root, lowerBound: -Infinity, upperBound: Infinity});
  while (nodeAndBoundsStack.length) {
    let nodeAndBounds = nodeAndBoundsStack.pop();
    let node = nodeAndBounds.node;
    let lowerBound = nodeAndBounds.lowerBound;
    let upperBound = nodeAndBounds.upperBound;
    if (node.value < lowerBound || node.value > upperBound) {
      return false;
    } 
    if (node.left) {
      nodeAndBoundsStack.push({node: node.left, lowerBound: lowerBound, upperBound: node.value});
    }
    if (node.right) {
      nodeAndBoundsStack.push({node: node.right, lowerBound: node.value, upperBound: upperBound});
    }
  }
  return true;
};


let myBT = new BinaryTreeNode(50);
myBT.insertLeft(30);
myBT.left.insertLeft(20);
myBT.left.insertRight(45);
myBT.insertRight(80);
myBT.right.insertLeft(79);
myBT.right.insertRight(90);

let output = isValidBinaryTree(myBT);
console.log(output);

