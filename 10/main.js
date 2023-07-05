// 10. 宣告一整數陣列 array = [3,50,0,13,2,4,11]
//     試寫一程式，印出陣列中所包含的質數以及其索引值。

import { Q10 } from "./Q10.js";

function main() {
  const array = [3, 50, 0, 13, 2, 4, 11];
  const primeResult = Q10(array);
  console.log(primeResult);
}

main();
