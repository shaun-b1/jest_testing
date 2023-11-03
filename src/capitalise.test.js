/* eslint-disable no-undef */
import { capitalise } from "./capitalise";

test("Function should convert a single word lower-cased string to a capitalised word", () => {
  expect(capitalise("hello")).toMatch(/Hello/);
});

test("Function should convert a multi-word lower-cased string to a capitalised first word", () => {
  expect(capitalise("hello world")).toMatch(/Hello world/);
});

test("Function should convert a single word upper-cased string to a capitalised word", () => {
  expect(capitalise("HELLO")).toMatch(/Hello/);
});

test("Function should convert a multi word upper-cased string to a capitalised first word", () => {
  expect(capitalise("HELLO WORLD")).toMatch(/Hello world/);
});
