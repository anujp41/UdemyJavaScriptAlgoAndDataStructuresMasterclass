const util = require('util');

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  // Iterative insert
  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    let currNode = this.root;
    let direction = val < currNode.val ? 'left' : 'right';
    while (currNode[direction]) {
      currNode = currNode[direction];
      if (val < currNode.val) direction = 'left';
      else direction = 'right';
    }
    currNode[direction] = new Node(val);
    return this;
  }

  //Recursive insert
  insertRecur(val, currNode = this.root) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    let direction = val < currNode.val ? 'left' : 'right';
    if (!currNode[direction]) {
      currNode[direction] = new Node(val);
      return this;
    }
    currNode = currNode[direction];
    return this.insertRecur(val, currNode);
  }
}

const tree = new BST();
tree.insertRecur(41);
tree.insertRecur(20);
tree.insertRecur(65);
tree.insertRecur(11);
tree.insertRecur(29);
tree.insertRecur(50);
tree.insertRecur(91);
tree.insertRecur(12);
tree.insertRecur(32);
tree.insertRecur(72);
tree.insertRecur(99);
tree.insertRecur(68);
tree.insertRecur(65);
tree.insertRecur(71);

console.log(util.inspect(tree, { showHidden: false, depth: null }));
