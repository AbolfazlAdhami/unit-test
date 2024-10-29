import { it, test, expect } from "vitest";
import { add } from "./math";

it("should summarize all numbers values in a array", () => {
  //Arrange
  const numbers = [1, 2, 3];

  //Act
  const result = add(numbers);

  //Assert
  const expectedResult = numbers.reduce((prev, cur) => prev + cur, 0);
  expect(result).toBe(expectedResult);
});

test("should yield Nan if a least one invalid numbers is provided", () => {
  const inputs = ["invalid", 1];

  const result = add(inputs);

  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numeric string values is provided ", () => {
  const values = ["1", "2"];

  const result = add(values);

  const expectResult = values.reduce((prev, cur) => +prev + +cur, 0);

  expect(result).toBe(expectResult);
});

it("should yield 0 if an empty array is provided", () => {
  const numbers = [];

  const result = add(numbers);

  expect(result).toBe(0);
});

it("should throw if no values is passed into the function", () => {
  const resultFn = () => add();

  expect(resultFn).toThrow(/is not iterable/);
});
