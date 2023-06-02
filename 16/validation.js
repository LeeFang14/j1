import { isEmpty, isLengthEqualNumber, isEnglish } from "../utility/verify.js";

export function validation(input) {
  isEmpty(input);
  isLengthEqualNumber(input, 5);
  isEnglish(input);
}
