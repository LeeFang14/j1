import { isPositiveInteger, isOverNumber, isEven } from "../utility/verify.js";

function umlEven(number, arr = []) {
  arr.unshift(number);
  if (number === 2) {
    return arr;
  } else {
    return umlEven(number - 2, arr);
  }
}

function calculateSum(accumulator, currentValue) {
  return accumulator + (currentValue - 2) * currentValue;
}

export function Q5(strInput) {
  isPositiveInteger(strInput);
  isOverNumber(strInput, 4);
  isEven(strInput);
  const numInput = Number(strInput);
  const numSequence = umlEven(numInput);
  const numTotal = numSequence.reduce(calculateSum, 0);
  return numTotal;
}
