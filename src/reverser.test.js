/* eslint-disable no-undef */
import { reverser } from "./reverser";

test("Function reverses a single word string with no spaces or punctuation", () => {
  expect(reverser("Hello")).toBe("olleH");
});

test("Function reverses a single word string with punctuation, but no spaces", () => {
  expect(reverser("Hello!")).toBe("!olleH");
});

test("Function reverses a multi word string", () => {
  expect(reverser("Hello World!")).toBe("!dlroW olleH");
});
