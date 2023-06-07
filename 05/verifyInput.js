import {
  isEmpty,
  isPositiveInteger,
  isOverNumber,
  isEven,
} from "../utility/verify.js";

export function verifyInput(input) {
  isEmpty(input);
  isPositiveInteger(input);
  isOverNumber(input, 4);
  isEven(input);
}
