import { isEmpty, isPositiveInteger } from "../utility/verify.js";

export function verifyInput(input) {
  isEmpty(input);
  isPositiveInteger(input);
}
