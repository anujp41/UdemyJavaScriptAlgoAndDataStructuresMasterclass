function countUniqueValues(array) {
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = 0;
  while (right < array.length) {
    console.log(left, right, array);
    if (array[left] === array[right]) {
      right++;
    } else {
      left++;
      right++;
      array[left] = array[right];
    }
  }
  console.log(left + 1);
  return left + 1;
}
countUniqueValues([1, 1, 1, 1, 1, 2]);
