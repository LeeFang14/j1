// 12. 找出10~20的質數，並列出前述各質數在1~100的倍數
// 找出質數*n倍的值，只要印出大於1小於100的值。

import { getPrimeArray, getMultiplyArray } from "./processNumber.js";

function main() {
  const primeArray = getPrimeArray(10, 20);
  primeArray.forEach((item) => {
    const MultiplyArray = getMultiplyArray(item, 1, 100);
    const filterArray = MultiplyArray.filter((item) => item <= 100);
    console.log(`質數 "${item}" 乘1~100後，大於1小於100的值: ${filterArray} `);
  });
}
main();
