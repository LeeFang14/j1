import { isEmpty, isSpace, isEnglish } from "../utility/verify.js";

export function validation(input) {
  isEmpty(input);
  isSpace(input);
  isEnglish(input);
}
