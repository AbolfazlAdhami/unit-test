import { it, expect, test, describe } from "vitest";

import { cleanNumbers, transformToNumber } from "./numbers";

test("should transform a string number to number of type of number", () => {
  //Arrange
  const value = "1";

  //Act
  const result = transformToNumber(value);

  //Assert
  expect(result).toBeTypeOf("number");
  expect(result).toBe(+value);
});

it("should yield NaN for non-transformable values", () => {
  const input = "invalid";
  const input2 = {};

  const result = transformToNumber(input);
  const result2 = transformToNumber(input2);

  expect(result).toBeNaN();
  expect(result2).toBeNaN();
});

describe("cleanNumbers()", () => {
  it("should return an array of number values if an array of string number value is provided", () => {
    // Arrange
    const numberValue = ["1", "2", "3", "4"];
    const expectResult = numberValue.map((i) => +i);

    // Act
    const result = cleanNumbers(numberValue);
    // Assert
    expect(result[0]).toBeTypeOf("number");
    expect(result).toContain(expectResult[1]);
    expect(result).toEqual(expectResult);
  });
  it("shoould yeild if one of inputes is empty", () => {
    const numberValues = ["", 1];
    const numberFn = () => cleanNumbers(numberValues);

    expect(numberFn).toThrow();
  });
  it("should yeild if one of inputes is string or NAN", () => {
    const numberValues = [false, "a"];
    const numberFn = () => cleanNumbers(numberValues);
    expect(numberFn).toThrow();
  });
  it("if array is empty should yeild", () => {
    const array = [];
    const arra2 = null; // null | undefined
    const cleanFn1 = () => cleanNumbers(array);
    const cleanFn2 = () => cleanNumbers(arra2);

    expect(cleanFn1).toThrow();
    expect(cleanFn2).toThrow();
  });
});
