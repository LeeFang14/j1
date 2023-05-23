import { isEmpty, isSpace, isPositiveInteger } from "../utility/verify.js";

export function validation(input) {
  isEmpty(input);
  isSpace(input);
  isPositiveInteger(input);
}
