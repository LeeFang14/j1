import { isPositiveInteger, isOverNumber, isEven } from "../modules/verify.js";

export function validateInput(input) {
  isPositiveInteger(input);
  isOverNumber(input, 4);
  isEven(input);
}
