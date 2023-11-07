/* eslint-disable no-undef */
import { caesarCipher } from "./caesarCipher";

test("Function should move a letter one letter along the alphabet", () => {
  expect(caesarCipher("a", 1)).toBe("b");
});

test("Shift factor should wrap around the alphabet", () => {
  expect(caesarCipher("z", 1)).toBe("a");
});

test("Function should move a capital letter one letter along the alphabet", () => {
  expect(caesarCipher("A", 1)).toBe("B");
});

test("Shift factor should wrap around the capital alphabet", () => {
  expect(caesarCipher("Z", 1)).toBe("A");
});

test("Function shouldn't shift non-alphabetic characters", () => {
  expect(caesarCipher("1", 1)).toBe("1");
  expect(caesarCipher(" ", 1)).toBe(" ");
  expect(caesarCipher("!", 1)).toBe("!");
});

test("Function shifts multiple letters", () => {
  expect(caesarCipher("AbcD", 1)).toBe("BcdE");
});

test("Function shifts a sentence", () => {
  expect(caesarCipher("Attack at daybreak!", 5)).toBe("Fyyfhp fy ifdgwjfp!");
});

test("Function deals with extreme shift factors", () => {
  expect(caesarCipher("Attack at daybreak!", 100)).toBe("Wppwyg wp zwuxnawg!");
});

test("Function deals with negatives", () => {
  expect(caesarCipher("Attack at daybreak!", -5)).toBe("Voovxf vo yvtwmzvf!");
});
