import {
  isEmpty,
  isSpace,
  isPositiveInteger,
  isOverNumber,
  isEven,
} from "../utility/verify.js";

export function validation(input) {
  isEmpty(input);
  isSpace(input);
  isPositiveInteger(input);
  isOverNumber(input, 4);
  isEven(input);
}
