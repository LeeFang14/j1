import { isZero, isInteger } from "../utility/verify.js";

function verifyInput(strInput) {
  isZero(strInput);
  isInteger(strInput);
  const numInput = Number(strInput);
  return numInput;
}

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
