// 5. 寫一個遞迴函數 function umleven(n)
// 來求算 2 * 4 + 4 * 6 + 6 * 8...+ (n - 2) * n
// (n最小為 4, 只會出現偶數)

import { askQuestion } from "./askQuestion.js";
import { umlEven, calculateSum } from "./calculate.js";

function main() {
  askQuestion((input) => {
    const umlEvenArr = umlEven(input).reverse();
    const result = calculateSum(umlEvenArr);
    console.log(result);
  });
}
main();
