const util = require('util');

class Node {
  constructor(val) {
    this.val = val;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  get counter() {
    return this.count;
  }

  addToLast(val) {
    const newNode = new Node(val);
    this.count++;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    if (!this.head.next) {
      this.tail = newNode;
      this.tail.previous = this.head;
      this.head.next = this.tail;
      return;
    }
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }

  addToFirst(val) {
    const newNode = new Node(val);
    this.count++;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.head.previous = newNode;
    newNode.next = this.head;
    this.head = newNode;
  }
}

const ddl = new DoublyLinkedList();
ddl.addToLast(10);
ddl.addToLast(1);
ddl.addToLast(25);
ddl.addToLast(15);
ddl.addToFirst(5);
console.log(util.inspect(ddl, { showHidden: false, depth: null }));
