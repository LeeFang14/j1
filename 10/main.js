// 10. 宣告一整數陣列 array = [3,50,0,13,2,4,11]
//     試寫一程式，印出陣列中所包含的質數以及其索引值。
// 一個自然數若恰有兩個正因數（1及此數本身），則稱之為質數。
// 找質數反證法：找到該值的開根號並取於數等於0就不是質數。
//             0,1不是質數，2是所有質數中唯一偶數。

import { isPrime } from "../utility/isPrime.js";

function main() {
  const array = [3, 50, 0, 13, 2, 4, 11];
  const primeValue = [];
  const primeIndex = [];
  array.forEach((value, index) => {
    if (isPrime(value)) {
      primeValue.push(value);
      primeIndex.push(index);
    }
  });
  printResult(primeValue, primeIndex);
}

function printResult(array1, array2) {
  array1.forEach((value, index) => {
    console.log(`質數 ${value} 索引 ${array2[index]}`);
  });
}

main();
