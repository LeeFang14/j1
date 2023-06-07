import { isEmpty, isZero, isPositiveInteger } from "../utility/verify.js";

export function verifyInput(input) {
  isEmpty(input);
  isZero(input);
  isPositiveInteger(input);
}
