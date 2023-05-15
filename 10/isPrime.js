export function isPrime(number) {
  if (number === 0 || number === 1) {
    return false;
  } else if (number === 2) {
    return true;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}