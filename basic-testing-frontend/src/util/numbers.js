import { validateNumber, validateStringNotEmpty, validatedArrayNumbers } from "./validation";

export function transformToNumber(value) {
  return +value;
}

export function cleanNumbers(numbersValue) {
  validatedArrayNumbers(numbersValue);
  const numbers = [];
  for (const numberValue of numbersValue) {
    validateStringNotEmpty(numberValue);
    const number = transformToNumber(numberValue);
    validateNumber(number);
    numbers.push(number);
  }
  return numbers;
}
