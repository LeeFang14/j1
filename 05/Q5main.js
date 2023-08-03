// 5. 寫一個遞迴函數 function umleven(n)
// 來求算 2 * 4 + 4 * 6 + 6 * 8...+ (n - 2) * n
// (n最小為 4, 只會出現偶數)

import { askQuestion } from "../utility/prompt.js";
import { Q5 } from "./Q5module.js";

function main() {
  try {
    const input = askQuestion("請輸入包含4以上的正偶數:");
    const orderedSequenceTotal = Q5(input);
    console.log(orderedSequenceTotal);
  } catch (error) {
    console.log(error.message);
    main();
  }
}
main();
