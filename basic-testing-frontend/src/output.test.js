import { test, expect, describe, it } from "vitest";

import { generateResultText, outputResult } from "./output";

describe("generateResultText()", () => {
  test("should return a string no matter no value passed a string", () => {
    const val1 = 1;
    const val2 = "invalid";
    const val3 = false;

    const result1 = generateResultText(val1);
    const result2 = generateResultText(val2);
    const result3 = generateResultText(val3);

    expect(result1).toBeTypeOf("string");
    expect(result2).toBeTypeOf("string");
    expect(result3).toBeTypeOf("string");
  });
  it("should passed a string that contain the calculated result if number is provided as result", () => {
    const result = 3;
    const expectedResult = generateResultText(result);

    expect(expectedResult).toContain(result.toString());
  });
  it("should return an empty string as 'no-calc' is provided as a result ", () => {
    const value = "no-calc";
    const resultText = generateResultText(value);
    expect(resultText).toBe("");
  });
});
