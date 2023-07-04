import { isPositiveInteger, isOverNumber, isEven } from "../utility/verify.js";

export function Q5(strInput) {
  isPositiveInteger(strInput);
  isOverNumber(strInput, 4);
  isEven(strInput);
  const numInput = Number(strInput);
  const numSequence = umlEven(numInput);
  const total = numSequence.reduce(calculateTotal, 0);
  return `總和: ${total}`;
}

function umlEven(number, arr = []) {
  arr.unshift(number);
  if (number === 2) {
    return arr;
  } else {
    return umlEven(number - 2, arr);
  }
}

function calculateTotal(accumulator, currentValue) {
  return accumulator + (currentValue - 2) * currentValue;
}
