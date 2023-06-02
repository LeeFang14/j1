import { isEmpty, isEnglish } from "../utility/verify.js";

export function validation(input) {
  isEmpty(input);
  isEnglish(input);
}
