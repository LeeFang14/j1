import { isZero, isPositiveInteger } from "../utility/verify.js";

export function Q8(strInput) {
  isZero(strInput);
  isPositiveInteger(strInput);
  const numInput = Number(strInput);
  const divisor = 3;
  const divisionByThree = createDivision();
  return `最少要除 ${divisionByThree(numInput, divisor)} 次`;
}

function createDivision() {
  let times = 0;
  return function division(numInput, divisor) {
    const strDivided = (numInput / divisor).toFixed(2);
    const num2ndDecimalPlace = strDivided.charAt(3);
    times++;
    if (num2ndDecimalPlace === "0") {
      return times;
    } else {
      const numDivided = Number(strDivided);
      return division(numDivided, divisor);
    }
  };
}
