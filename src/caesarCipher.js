function caesarCipher(string, shiftFactor) {
  if (
    string.charCodeAt(0).between(96, 123) &&
    string.charCodeAt(0) + shiftFactor > 122
  ) {
    const shiftedValue = shiftFactor - 26;
    return shift(string, shiftedValue);
  } else {
    return shift(string, shiftFactor);
  }
}

function shift(string, shiftFactor) {
  return String.fromCharCode(string.charCodeAt(0) + shiftFactor);
}

Number.prototype.between = function (a, b) {
  const min = Math.min.apply(Math, [a, b]);
  const max = Math.max.apply(Math, [a, b]);
  return this > min && this < max;
};

export { caesarCipher };
