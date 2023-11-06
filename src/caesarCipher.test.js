/* eslint-disable no-undef */
import { caesarCipher } from "./caesarCipher";

test("Function should move a letter one letter along the alphabet", () => {
  expect(caesarCipher("a", 1)).toBe("b");
});

test("Function should wrap around the Alphabet", () => {
  expect(caesarCipher("z", 1)).toBe("a");
});
