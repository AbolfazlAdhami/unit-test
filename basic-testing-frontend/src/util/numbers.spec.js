import { it, expect, test } from "vitest";

import { transformToNumber } from "./numbers";

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
