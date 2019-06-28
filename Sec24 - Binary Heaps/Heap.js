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
    let currIndex = this.heap.length - 1;
    let parentIdx = this.getParentIdx(currIndex);
    while (this.heap[parentIdx] < this.heap[currIndex]) {
      this.switch(parentIdx, currIndex);
      currIndex = parentIdx;
      parentIdx = this.getParentIdx(currIndex);
    }
  }

  getParentIdx(currIdx) {
    return Math.floor((currIdx - 1) / 2);
  }

  getChildren(idx) {
    const [leftChildIdx, rightChildIdx] = [idx * 2 + 1, idx * 2 + 2];
    const leftChild = this.heap[leftChildIdx] ? this.heap[leftChildIdx] : null;
    const rightChild = this.heap[rightChildIdx]
      ? this.heap[rightChildIdx]
      : null;
    return [leftChild, rightChild];
  }

  getMax() {
    const maxItem = this.heap[0];
    this.heap[0] = this.heap.pop();
    let currIdx = 0;
    let [leftChildIdx, rightChildIdx] = [currIdx * 2 + 1, currIdx * 2 + 2];
    let maxChildIdx =
      this.heap[leftChildIdx] < this.heap[rightChildIdx]
        ? rightChildIdx
        : leftChildIdx;
    while (
      this.heap[currIdx] <
      Math.max(this.heap[leftChildIdx], this.heap[rightChildIdx])
    ) {
      this.switch(currIdx, maxChildIdx);
      currIdx = maxChildIdx;
      leftChildIdx = currIdx * 2 + 1;
      rightChildIdx = currIdx * 2 + 2;
      maxChildIdx =
        this.heap[leftChildIdx] < this.heap[rightChildIdx]
          ? rightChildIdx
          : leftChildIdx;
    }
    return maxItem;
  }
}

const myMaxHeap = new MaxBinaryHeap();
const getRand = () => Math.floor(Math.random() * 100);
for (let i = 1; i <= 20; i++) {
  myMaxHeap.insert(getRand());
}
console.log(myMaxHeap);
console.log(myMaxHeap.getMax());
console.log(myMaxHeap);
// console.log(myMaxHeap.getChildren(5));
// console.log(myMaxHeap.getChildren(17));
