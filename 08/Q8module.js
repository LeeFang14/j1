import { isZero, isPositiveInteger } from "../utility/verify.js";

export function Q8(strInput) {
  isZero(strInput);
  isPositiveInteger(strInput);
  const numInput = Number(strInput);
  const divisor = 3;
  const divisionByThree = division(numInput, divisor);
  return `最少要除 ${divisionByThree} 次`;
}

function division(originNumber, divisor, times = 1) {
  const dividedNumber = originNumber / divisor;
  const decimalSecondPlace = Math.floor(dividedNumber * 100) % 10;
  if (decimalSecondPlace === 0) {
    return times;
  } else {
    return division(dividedNumber, divisor, times + 1);
  }
}
