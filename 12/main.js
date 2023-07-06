// 12. 找出10~20的質數，並列出前述各質數在1~100的倍數

// 對上述題目的理解是：找出質數*n倍的值，只要印出大於1小於100的值。
// 1. 找出10~20的各質數
// 2. 找出各質數1~100的倍數
// 3. 篩選各質數大於1小於100值

import { Q12 } from "./Q12.js";

function main() {
  const startNumber = 10;
  const endNumber = 20;
  const result = Q12(startNumber, endNumber);
  console.log(result);
}
main();
