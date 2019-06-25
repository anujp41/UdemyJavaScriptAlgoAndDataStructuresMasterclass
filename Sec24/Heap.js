//Binary Heap >> Min Heap & Max Heap
class MaxBinaryHeap {
  constructor() {
    this.heap = [];
  }

  switch(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  insert(val) {
    if (val === undefined) return;
    this.heap.push(val);
    let checkIfMin = false;
    let currIndex = this.heap.length - 1;
    while (!checkIfMin) {
      const parentIdx = Math.floor((currIndex - 1) / 2);
      if (this.heap[parentIdx] < this.heap[currIndex]) {
        this.switch(parentIdx, currIndex);
      } else {
        checkIfMin = true;
      }
      currIndex = parentIdx;
    }
  }

  getChildren(idx) {
    const [leftChildIdx, rightChildIdx] = [idx * 2 + 1, idx * 2 + 2];
    const leftChild = this.heap[leftChildIdx] ? this.heap[leftChildIdx] : null;
    const rightChild = this.heap[rightChildIdx]
      ? this.heap[rightChildIdx]
      : null;
    return [leftChild, rightChild];
  }
}

const myMaxHeap = new MaxBinaryHeap();
const getRand = () => Math.floor(Math.random() * 100);
for (let i = 1; i <= 31; i++) {
  myMaxHeap.insert(getRand());
}
console.log(myMaxHeap);
console.log(myMaxHeap.getChildren(5));
console.log(myMaxHeap.getChildren(17));
