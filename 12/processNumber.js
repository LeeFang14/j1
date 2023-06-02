import { isPrime } from "../utility/isPrime.js";

export function getPrimeArray(startNumber, endNumber) {
  const PrimeArray = [];
  for (let index = startNumber; index <= endNumber; index++) {
    if (isPrime(index)) {
      PrimeArray.push(index);
    }
  }
  return PrimeArray;
}

export function getMultiplyArray(number, startNumber, endNumber) {
  const multiplyArray = [];
  for (let index = startNumber; index <= endNumber; index++) {
    multiplyArray.push(number * index);
  }
  return multiplyArray;
}
