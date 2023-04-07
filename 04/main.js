// 4. 輸入 n 印出 1+2-3+4-5+6-7...n 的算式與總和

import { askQuestion } from "./askQuestion.js";
import {
  generateSequence,
  generateFormula,
  calculateSum,
} from "./calculate.js";

function main() {
  askQuestion((input) => {
    const num = Number(input);
    const numArr = generateSequence(num);
    const formulaStr = generateFormula(numArr);
    console.log("算式:", formulaStr);
    const result = calculateSum(numArr);
    console.log("總和:", result);
  });
}
main();
