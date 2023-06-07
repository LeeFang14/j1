// 2. 使用者輸入兩個整數，將它們分別除以3，判斷餘數是否相同，
//    若相同，則於螢幕上顯示「餘數相同」。

// 1. readline 拿到使用者輸入的值
// 2. 驗證使用者輸入的值 ok往下->3，不行 -> 1 重問
// 3. 對兩數取於數並比較，回傳結果
// 4. 印出結果

import { askQuestion } from "../utility/readlineCallback.js";
import { verifyInput } from "./verifyInput.js";
import { isModEqual } from "./isModEqual.js";

function main() {
  askQuestion("請輸入2個整數", 2, verifyInput, (inputArray) => {
    const numberArray = inputArray.map((item) => {
      return Number(item);
    });
    const [number1, number2] = numberArray;
    const modEqualResult = isModEqual(number1, number2, 3);
    const result = modEqualResult ? "餘數相同" : "餘數不同";
    console.log(result);
  });
}

main();
