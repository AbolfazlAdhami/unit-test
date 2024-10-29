import { extractEnteredNumbersValues } from "./src/parser.js";

import { calculatedValues } from "./src/math.js";
import { generateResultText, outputResult } from "./src/output.js";

const form = document.querySelector("form");

function formSubmitHandler(event) {
  event.preventDefault();
  const numbersValues = extractEnteredNumbersValues(form);

  const result = calculatedValues(numbersValues);
  const resultText = generateResultText(result);
  outputResult(resultText);
}

form.addEventListener("submit", formSubmitHandler);
