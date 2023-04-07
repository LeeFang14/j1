import { isPositiveInteger, isOverFour, isEven } from "../modules/verify.js";

function validateInput(input) {
  isPositiveInteger(input);
  isOverFour(input);
  isEven(input);
}

export { validateInput };
