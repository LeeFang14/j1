import { isEmpty, isEnglish } from "../utility/verify.js";

export function verifyInput(input) {
  isEmpty(input);
  isEnglish(input);
}
