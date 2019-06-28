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

  //Recursive find
  find(val, currNode = this.root) {
    if (currNode === null) return false;
    if (currNode.val === val) return true;
    let direction = val < currNode.val ? 'left' : 'right';
    return this.find(val, currNode[direction]);
  }

  //switching left, right and consoles will change the order in which this traverses BFS (can be pre, post, in-oroder)
  depthFirst(currNode = this.root, valueArr = []) {
    valueArr.push(currNode.val);
    if (currNode.right) this.depthFirst(currNode.right, valueArr);
    if (currNode.left) this.depthFirst(currNode.left, valueArr);
    return valueArr;
  }

  depthFirstPre(currNode = this.root, valueArr = []) {
    valueArr.push(currNode.val);
    if (currNode.left) this.depthFirstPre(currNode.left, valueArr);
    if (currNode.right) this.depthFirstPre(currNode.right, valueArr);
    return valueArr;
  }

  depthFirstOrder(currNode = this.root, valueArr = []) {
    if (currNode.left) this.depthFirstOrder(currNode.left, valueArr);
    valueArr.push(currNode.val);
    if (currNode.right) this.depthFirstOrder(currNode.right, valueArr);
    return valueArr;
  }

  depthFirstPost(currNode = this.root, valueArr = []) {
    if (currNode.right) this.depthFirstPost(currNode.right, valueArr);
    valueArr.push(currNode.val);
    if (currNode.left) this.depthFirstPost(currNode.left, valueArr);
    return valueArr;
  }

  breadthFirst() {
    const myBFSQueue = [this.root];
    const myBFSVal = [];
    while (myBFSQueue.length) {
      const currNode = myBFSQueue.shift();
      myBFSVal.push(currNode.val);
      if (currNode.left) myBFSQueue.push(currNode.left);
      if (currNode.right) myBFSQueue.push(currNode.right);
    }
    return myBFSVal;
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
tree.insertRecur(71);
tree.insertRecur(10);
tree.insertRecur(6);
tree.insertRecur(3);
tree.insertRecur(8);
tree.insertRecur(15);
tree.insertRecur(20);

// console.log(util.inspect(tree, { showHidden: false, depth: null }));
console.log(tree.depthFirstPost());
