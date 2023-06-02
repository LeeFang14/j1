import { isEmpty, isPositiveInteger } from "../utility/verify.js";

export function validation(input) {
  isEmpty(input);
  isPositiveInteger(input);
}
