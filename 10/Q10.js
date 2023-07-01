import { isPrime } from "../utility/isPrime.js";

export function Q10(array) {
  const arrPrimeValue = [];
  const arrPrimeIndex = [];
  array.forEach((value, index) => {
    if (isPrime(value)) {
      arrPrimeValue.push(value);
      arrPrimeIndex.push(index);
    }
  });
  return arrPrimeValue.map((value, index) => {
    return `質數 ${value} 索引 ${arrPrimeIndex[index]}`;
  });
}
