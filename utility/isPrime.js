// 一個自然數若恰有兩個正因數（1及此數本身），則稱之為質數。
// 找質數反證法：找到該值的開根號並取於數等於0就不是質數。
//             0,1不是質數，2是所有質數中唯一偶數。

export function isPrime(number) {
  if (number < 2) return;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return;
  }
  return true;
}
