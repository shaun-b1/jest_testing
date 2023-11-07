function caesarCipher(string, shiftFactor) {
  return string
    .split("")
    .map((char) => characterShifter(char, shiftFactor))
    .join("");
}

function isUpperCase(charCode) {
  return charCode >= 65 && charCode <= 90;
}

function isLowerCase(charCode) {
  return charCode >= 97 && charCode <= 122;
}

function characterShifter(char, shiftFactor) {
  const charCode = char.charCodeAt(0);

  if (isUpperCase(charCode) || isLowerCase(charCode)) {
    const shiftAmount = shiftFactor % 26;
    let shiftedCharCode = charCode + shiftAmount;

    if (
      (isUpperCase(charCode) && shiftedCharCode > 90) ||
      (isLowerCase(charCode) && shiftedCharCode > 122)
    ) {
      shiftedCharCode -= 26;
    } else if (
      (isUpperCase(charCode) && shiftedCharCode < 65) ||
      (isLowerCase(charCode) && shiftedCharCode < 97)
    ) {
      shiftedCharCode += 26;
    }
    return String.fromCharCode(shiftedCharCode);
  }
  return char;
}

export { caesarCipher };
