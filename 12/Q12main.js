// 12. 找出10~20的質數，並列出前述各質數在1~100的倍數

import { Q12 } from "./Q12module.js";

function main() {
  const startNumber = 10;
  const endNumber = 20;
  const result = Q12(startNumber, endNumber);
  console.log(result);
}
main();
