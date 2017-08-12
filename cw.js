function reverseNumber(num) {
  const str = '' + num;
  const result = [];

  for (const char of str) {
    result.unshift(char);
  }

  if (num < 0) {
    result.pop();
    result.unshift('-');
  }

  return parseInt(result.join(''));
}
