function analyseArray(array) {
  const average = array.reduce((a, b) => a + b) / array.length;
  const min = array.sort((a, b) => a - b)[0];
  const max = array.sort((a, b) => a - b)[array.length - 1];
  const length = array.length;

  return { average, min, max, length };
}

export { analyseArray };
