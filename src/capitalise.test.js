import { capitalise } from "./capitalise";

test("Function should uppercase a lowercase string", () => {
  expect(capitalise("hello")).toMatch(/Hello/);
});
