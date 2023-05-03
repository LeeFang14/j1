// 可以得到小於等於n的所有質數
export function getAllPrimesArray(number) {
  const isPrime = new Array(number).fill(true);

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= number; j += i) {
        isPrime[j] = false;
      }
    }
  }

  const primeArray = [];
  for (let i = 2; i < number; i++) {
    if (isPrime[i]) {
      primeArray.push(i);
    }
  }

  return primeArray;
}
