import { isEmpty, isLengthEqualNumber, isEnglish } from "../utility/verify.js";

export function verifyInput(input) {
  isEmpty(input);
  isLengthEqualNumber(input, 5);
  isEnglish(input);
}
