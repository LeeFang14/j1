// 4. 輸入 n 印出 1+2-3+4-5+6-7...n 的算式與總和

import { askQuestion } from "./askQuestion.js";
import {
  generateSequence,
  generateFormula,
  calculateSum,
} from "./calculate.js";

function main() {
  askQuestion((number) => {
    const numberArray = generateSequence(number);
    const formulaString = generateFormula(numberArray);
    console.log("算式:", formulaString);
    const result = calculateSum(numArray);
    console.log("總和:", result);
  });
}
main();
