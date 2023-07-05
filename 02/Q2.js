import { isZero, isInteger } from "../utility/verify.js";

export function Q2(strTwoInteger) {
  const numTwoInteger = strTwoInteger.map(verifyInput);
  const [firstInteger, secondInteger] = numTwoInteger;
  const divisor = 3;
  let message = "";
  if (firstInteger % divisor === secondInteger % divisor) {
    message = "餘數相同";
  } else {
    message = "餘數不同";
  }
  return message;
}

function verifyInput(strInput) {
  isZero(strInput);
  isInteger(strInput);
  return Number(strInput);
}
