function deepCount(arr, counter = []) {
  for (const el of arr) {
    counter.push(1);
    if (Array.isArray(el)) {
      deepCount(el, counter);
    }
  }
  return counter.reduce((a, b) => a + b, 0);
}
