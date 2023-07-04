// 5. 寫一個遞迴函數 function umleven(n)
// 來求算 2 * 4 + 4 * 6 + 6 * 8...+ (n - 2) * n
// (n最小為 4, 只會出現偶數)

import promptSync from "prompt-sync";
import { Q5 } from "./Q5.js";
const prompt = promptSync({ sigint: true });

function main() {
  try {
    const input = prompt("請輸入包含4以上的正偶數:");
    const orderedSequenceTotal = Q5(input);
    console.log(orderedSequenceTotal);
  } catch (error) {
    console.log("輸入錯誤，請重新輸入！");
    main();
  }
}
main();
