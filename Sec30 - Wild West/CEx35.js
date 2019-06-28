const util = require('util');

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(num) {
    // YOUR CODE GOES HERE
    let newNode = new Node(num);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
}

var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5);
singlyLinkedList.push(55);
singlyLinkedList.push(45);
singlyLinkedList.push(35);
console.log(util.inspect(singlyLinkedList, { showHidden: false, depth: null }));
