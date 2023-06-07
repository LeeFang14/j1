// 5. 寫一個遞迴函數 function umleven(n)
// 來求算 2 * 4 + 4 * 6 + 6 * 8...+ (n - 2) * n
// (n最小為 4, 只會出現偶數)

// 1. readline 拿到使用者輸入的值
// 2. 驗證使用者輸入的值 ok往下 -> 3，不行 -> 1 重問
// 3. 遞迴函數 function 取得 n!
// 4. 加總
// 5. 印出加總結果

import { askQuestion } from "../utility/readlineCallback.js";
import { verifyInput } from "./verifyInput.js";
import { umlEven, calculateSum } from "./calculate.js";

function main() {
  askQuestion("請輸入包含4以上的正偶數: ", 1, verifyInput, (inputArray) => {
    const verified = Number(inputArray[0]);
    const umlEvenArray = umlEven(verified);
    const result = calculateSum(umlEvenArray);
    console.log("總和: ", result);
  });
}
main();
