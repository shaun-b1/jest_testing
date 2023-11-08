/* eslint-disable no-undef */
import { analyseArray } from "./analyseArray";

const object = analyseArray([1, 8, 3, 4, 2, 6]);

test("Function should return the smallest number in the array as the 'min' property", () => {
  expect(object).toHaveProperty("min", 1);
});

test("Function should return the largest number in the array as the 'max' property", () => {
  expect(object).toHaveProperty("max", 8);
});

test("Function should return the average of the array as the 'average' property", () => {
  expect(object).toHaveProperty("average", 4);
});

test("Function should return the length of the array as the 'length' property", () => {
  expect(object).toHaveProperty("length", 6);
});
