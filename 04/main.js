// 4. 輸入 n 印出 1+2-3+4-5+6-7...n 的算式與總和

// 1. readline 拿到使用者輸入的值
// 2. 驗證使用者輸入的值 ok往下 -> 3，不行 -> 1 重問
// 3. 取得算式
// 4. 取得總和
// 5. 印出結果

import { askQuestion } from "../utility/readlineCallback.js";
import { verifyInput } from "./verifyInput.js";
import {
  generateSequence,
  generateFormula,
  calculateSum,
} from "./calculate.js";

function main() {
  askQuestion("請輸入一個正整數: ", 1, verifyInput, (inputArray) => {
    const verified = Number(inputArray[0]);
    const numberArray = generateSequence(verified);
    const formulaString = generateFormula(numberArray);
    const result = calculateSum(numberArray);
    console.log(`${formulaString} = ${result}`);
    // const message = `${formulaString} = ${result}`;
    // console.log(message);
  });
}
main();
