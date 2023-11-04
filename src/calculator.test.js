/* eslint-disable no-undef */
import { calculator } from "./calculator";

test("function should add two numbers together", () => {
  expect(calculator.add(1, 1)).toEqual(2);
});

test("function should add two numbers, one of which is negative", () => {
  expect(calculator.add(-1, 2)).toEqual(1);
});

test("function should add two numbers, one of which is 0", () => {
  expect(calculator.add(1, 0)).toEqual(1);
});

test("function should add two numbers that are floating point numbers", () => {
  expect(calculator.add(0.5, 0.5)).toBeCloseTo(1);
});

test("Function should subtract two numbers", () => {
  expect(calculator.subtract(2, 1)).toEqual(1);
});

test("Function should subtract two numbers, one of which is negative", () => {
  expect(calculator.subtract(-1, 1)).toEqual(-2);
});

test("Function should subtract two numbers, one of which is 0", () => {
  expect(calculator.subtract(0, 2)).toEqual(-2);
});

test("Function should subtract two numbers that are floating point numbers", () => {
  expect(calculator.subtract(1.5, 0.5)).toBeCloseTo(1);
});

test("Function should multiply two numbers", () => {
  expect(calculator.multiply(2, 2)).toEqual(4);
});

test("Function should multiply two numbers, one of which is negative", () => {
  expect(calculator.multiply(-2, 2)).toEqual(-4);
});

test("Function should multiply two numbers, one of which is 0", () => {
  expect(calculator.multiply(0, 3)).toEqual(0);
});

test("Function should multiply two numbers that are floating point numbers", () => {
  expect(calculator.multiply(1.5, 0.5)).toBeCloseTo(0.75);
});

test("Function should divide two numbers", () => {
  expect(calculator.divide(10, 2)).toEqual(5);
});

test("Function should divide two numbers, one of which is negative", () => {
  expect(calculator.divide(-10, 2)).toEqual(-5);
});

test("Function should divide two numbers, one of which is 0", () => {
  expect(calculator.divide(10, 0)).toEqual(Infinity);
});

test("Function should divide two numbers that are floating point numbers", () => {
  expect(calculator.divide(1.5, 0.5)).toBeCloseTo(3);
});
