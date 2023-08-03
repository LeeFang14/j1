import { isZero, isPositiveInteger } from "../utility/verify.js";

export function Q4(strInput) {
  isZero(strInput);
  isPositiveInteger(strInput);
  const numInput = Number(strInput);
  const numSequence = Array.from({ length: numInput }, generateSequence);
  const strSequence = numSequence.map(numToStr).join("");
  const total = numSequence.map(numOddToNegative).reduce(calculateTotal);
  return `算式: ${strSequence} , 總和: ${total}`;
}

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

function calculateTotal(accumulator, currentValue) {
  return accumulator + currentValue;
}
