import { isPrime } from "../utility/isPrime.js";

export function Q12(startNumber, endNumber) {
  return pickPrimeNumber(startNumber, endNumber)
    .map((item) => {
      const minNumber = 1;
      const maxNumber = 100;
      const MultiplyArray = primeToMultiplyRange(
        item,
        minNumber,
        maxNumber
      ).filter((item) => item > minNumber && item < maxNumber);
      return `質數${item}乘1到100後，介於1到100的值: ${MultiplyArray}`;
    })
    .join("\n");
}

function pickPrimeNumber(startNumber, endNumber) {
  const PrimeArray = [];
  for (let index = startNumber; index <= endNumber; index++) {
    if (isPrime(index)) {
      PrimeArray.push(index);
    }
  }
  return PrimeArray;
}

function primeToMultiplyRange(number, startNumber, endNumber) {
  const multiplyArray = [];
  for (let index = startNumber; index <= endNumber; index++) {
    multiplyArray.push(number * index);
  }
  return multiplyArray;
}
