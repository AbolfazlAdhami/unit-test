import { validateNumber, validateStringNotEmpty } from "./validation";

export function transformToNumber(value) {
  return +value;
}

export function cleanNumbers(numbersValue) {
  const numbers = [];
  for (const numberValue of numbersValue) {
    validateStringNotEmpty(numberValue);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }
}
