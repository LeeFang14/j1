// 可以得到小於等於number的所有質數
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
  for (let index = 2; index < number; index++) {
    if (isPrime[index]) {
      primeArray.push(index);
    }
  }

  return primeArray;
}
