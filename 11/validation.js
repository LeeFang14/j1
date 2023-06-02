import { isEmpty, isZero, isPositiveInteger } from "../utility/verify.js";

export function validation(input) {
  isEmpty(input);
  isZero(input);
  isPositiveInteger(input);
}
