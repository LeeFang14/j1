import { isEmpty, isInteger } from "../utility/verify.js";

export function validation(input) {
  isEmpty(input);
  isInteger(input);
}
