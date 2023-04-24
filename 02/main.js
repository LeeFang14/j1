// 2. 使用者輸入兩個整數，將它們分別除以 3，判斷餘數是否相同，
//    若相同，則於螢幕上顯示「餘數相同」。

import { askQuestion } from "./askQuestion.js";
import { isModEqual } from "./isModEqual.js";

function main() {
  console.log("請輸入2個整數");
  askQuestion(1, [], (answers) => {
    const [num1, num2] = answers;
    const ModEqualResult = isModEqual(num1, num2, 3);
    const result = ModEqualResult ? "餘數相同" : "餘數不同";
    console.log(result);
  });
}

main();
