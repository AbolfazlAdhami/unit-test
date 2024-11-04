import { it, test, expect, vi } from "vitest";
import { promises as fs } from "fs";
import { writeData } from "./io";
import { join } from "path";

vi.mock("fs");
vi.mock("path", () => {
  return {
    default: {
      join: (...arg) => {
        return arg[arg.length - 1];
      },
    },
  };
});

it("should exucuted the writeFile method with Resolve", () => {
  const testData = "Test";
  const testFilename = "test.txt";
  writeData(testData, testFilename);

  return expect(writeData(testData, testData)).resolves.toBeUndefined();
});
it("should exucuted and Called fs writeFile ", () => {
  const testData = "Test";
  const testFilename = "test.txt";
  writeData(testData, testFilename);

  expect(fs.writeFile).toBeCalled();
});

it("should exucuted Called With Parameter", () => {
  const testData = "Test";
  const testFilename = "test.txt";
  writeData(testData, testFilename);

  expect(fs.writeFile).toBeCalledWith(testFilename, testData);
});
