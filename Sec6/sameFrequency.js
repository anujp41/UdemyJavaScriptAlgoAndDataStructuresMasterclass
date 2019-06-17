function sameFrequency(n, m) {
  const nArr = n
    .toString()
    .split('')
    .sort((a, b) => a - b);
  const mArr = m
    .toString()
    .split('')
    .sort((a, b) => a - b);
  if (nArr.length !== mArr.length) return false;
  const result = nArr.some((item, idx) => item !== mArr[idx]);
  return !result;
}

console.log(sameFrequency(22, 222));
