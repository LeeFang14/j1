import { isPositiveInteger } from "../utility/verify.js";

function generateSequence(_, index) {
  return index + 1;
}

function numToStr(item, index) {
  if (index === 0) {
    return item.toString();
  } else if (index > 0 && index % 2 !== 0) {
    return "+" + item.toString();
  } else {
    return "-" + item.toString();
  }
}

function numOddToNegative(item, index) {
  if (index > 0 && index % 2 == 0) {
    return -item;
  } else {
    return item;
  }
}

function calculateSum(accumulator, currentValue) {
  return accumulator + currentValue;
}

export function Q4(strInput) {
  isPositiveInteger(strInput);
  const numInput = Number(strInput);
  const numSequence = Array.from({ length: numInput }, generateSequence);
  const strSequence = numSequence.map(numToStr).join("");
  const numTotal = numSequence.map(numOddToNegative).reduce(calculateSum);
  return { strSequence, numTotal };
}
