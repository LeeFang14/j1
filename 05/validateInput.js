import { isPositiveInteger, isOverFour, isEven } from "../modules/verify.js";

export function validateInput(input) {
  isPositiveInteger(input);
  isOverFour(input);
  isEven(input);
}
