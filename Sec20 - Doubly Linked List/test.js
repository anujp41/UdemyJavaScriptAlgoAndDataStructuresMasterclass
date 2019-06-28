/*
const palindromChecker = word => {
  word = word.toLowerCase();
  // const reverseWord = word
  //   .split('')
  //   .reverse()
  //   .join('');
  // return word === reverseWord;
  const wordLen = word.length;
  const midLen = Math.floor(wordLen / 2);
  for (let i = 0; i <= midLen; i++) {
    if (word[i] !== word[wordLen - (i + 1)]) return false;
  }
  return true;
};

console.log(palindromChecker('Anna'));
console.log(palindromChecker('Repaper'));
console.log(palindromChecker('Madam'));
console.log(palindromChecker('BEvo'));
console.log(palindromChecker('Sylvester'));
*/

const bracketPair = {
  '(': ')',
  '{': '}',
  '[': ']'
};

const balanceBrackets = brackets => {
  const bracketQueue = [];
  for (let i = 0; i < brackets.length; i++) {
    const currBracket = brackets[i];
    if (bracketQueue.length === 0) {
      bracketQueue.push(brackets[i]);
      continue;
    }
    const lastBracketInQueue = bracketQueue[bracketQueue.length - 1];
    if (currBracket === bracketPair[lastBracketInQueue]) bracketQueue.pop();
    else bracketQueue.push(currBracket);
  }
  return bracketQueue.length === 0;
};
console.log(balanceBrackets('[()]{}{[()()]()}')); //true
console.log(balanceBrackets('[(])')); //true
