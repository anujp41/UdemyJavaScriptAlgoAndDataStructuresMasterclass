class Node {
  constructor(key, val, next = null) {
    this.key = key;
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(key, item) {
    const newNode = new Node(key, item);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }

  find(key) {
    if (this.head.key === key) return this.head.val;
    let currNode = this.head;
    while (currNode) {
      if (currNode.key === key) return currNode.val;
      currNode = currNode.next;
    }
  }
}

class HashTable {
  constructor(size = 53) {
    this.keyMap = Array.from({ length: size }, () => new LinkedList());
  }

  _hash(key) {
    let hashVal = 0;
    const maxItn = Math.min(key.length, 100);
    const MY_PRIME = 73;
    for (let i = 0; i < maxItn; i++) {
      let currChar = key[i];
      let currCodeVal = currChar.charCodeAt(0);
      hashVal = (hashVal * MY_PRIME + currCodeVal) % this.keyMap.length;
    }
    return hashVal;
  }

  _fetch(idx) {
    return this.keyMap[idx];
  }

  set(key, item) {
    const keyMapIdx = this._hash(key);
    this._fetch(keyMapIdx).insert(key, item);
  }

  get(key) {
    const keyMapIdx = this._hash(key);
    return this._fetch(keyMapIdx).find(key);
  }
}

const myHash = new HashTable(2);
const dataToStore = [['shower', 2], ['coffee', 1], ['feed cat', 3]];
dataToStore.forEach(item => myHash.set(item[0], item[1]));

myHash.keyMap.forEach(item => {
  console.log(item);
  console.log('~~~~~~~~~~~~~~~~~~~~~~');
});
