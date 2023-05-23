import { isEmpty, isSpace, isInteger } from "../utility/verify.js";

export function validation(input) {
  isEmpty(input);
  isSpace(input);
  isInteger(input);
}
