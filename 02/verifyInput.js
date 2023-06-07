import { isEmpty, isInteger } from "../utility/verify.js";

export function verifyInput(input) {
  isEmpty(input);
  isInteger(input);
}
