class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.priorityQueue = [];
  }

  switch(i, j) {
    // console.log(i, j);
    // console.log(this.priorityQueue[i], this.priorityQueue[i].priority);
    const temp = this.priorityQueue[i];
    this.priorityQueue[i] = this.priorityQueue[j];
    this.priorityQueue[j] = temp;
  }

  enqueue(val, priority) {
    const newItem = new Node(val, priority);
    this.priorityQueue.push(newItem);
    if (this.priorityQueue.length === 1) return;
    let currIdx = this.priorityQueue.length - 1;
    let parentIdx = Math.floor((currIdx - 1) / 2);
    while (
      this.priorityQueue[parentIdx].priority >
      this.priorityQueue[currIdx].priority
    ) {
      this.switch(currIdx, parentIdx);
      currIdx = parentIdx;
      parentIdx = Math.floor((currIdx - 1) / 2);
      if (parentIdx < 0) break;
    }
  }

  dequeue() {
    const pulledItem = this.priorityQueue[0];
    this.priorityQueue[0] = this.priorityQueue.pop();
    let currIdx = 0;
    let [leftChildIdx, rightChildIdx] = [currIdx * 2 + 1, currIdx * 2 + 2];
    let minChildIdx =
      this.priorityQueue[rightChildIdx].priority <
      this.priorityQueue[leftChildIdx].priority
        ? rightChildIdx
        : leftChildIdx;
    while (
      this.priorityQueue[currIdx].priority >
      this.priorityQueue[minChildIdx].priority
    ) {
      this.switch(currIdx, minChildIdx);
      currIdx = minChildIdx;
      leftChildIdx = currIdx * 2 + 1;
      rightChildIdx = currIdx * 2 + 2;
      minChildIdx =
        this.priorityQueue[leftChildIdx] < this.priorityQueue[rightChildIdx]
          ? rightChildIdx
          : leftChildIdx;
      console.log('minChildIdx', minChildIdx);
      if (minChildIdx >= this.priorityQueue.length) break;
    }
    return pulledItem;
  }
}

const myPQueue = new PriorityQueue();
myPQueue.enqueue('feed cat', 3);
myPQueue.enqueue('breakfast', 2);
myPQueue.enqueue('dump', 2);
myPQueue.enqueue('shower', 5);
myPQueue.enqueue('hair', 5);
myPQueue.enqueue('coffee', 1);
myPQueue.enqueue('trash', 5);
console.log(myPQueue);
console.log(myPQueue.dequeue());
console.log(myPQueue);
console.log(myPQueue.dequeue());
console.log(myPQueue);
