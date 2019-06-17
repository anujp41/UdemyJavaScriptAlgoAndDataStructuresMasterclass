const array = [
  1556,
  4,
  3556,
  100001,
  593,
  408,
  4386,
  902,
  7,
  8157,
  86,
  9637,
  29,
  2
];

const getDigit = (num, unit) => Math.floor(num / Math.pow(10, unit)) % 10;

function radixSort(array) {
  let result = Array.from({ length: 10 });
  let loop = true;
  let tracker = 0;
  while (loop) {
    loop = false;
    for (let j = 0; j < array.length; j++) {
      const digit = getDigit(array[j], tracker);
      if (loop === false && Math.floor(array[j] / Math.pow(10, tracker)) > 0)
        loop = true;
      result[digit] === undefined
        ? (result[digit] = [array[j]])
        : result[digit].push(array[j]);
    }
    array = [];
    result.forEach(item => {
      if (item !== undefined) array.push(...item);
    });
    tracker++;
    result = Array.from({ length: 10 });
  }
  return array;
}

console.log(radixSort(array));
