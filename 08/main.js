// 8. 試寫一程式，讓使用者輸入一正整數n值，並撰寫一遞迴函數
//    function divi(n) 來求算當 n 值不斷除以 3 時，
//    最少要除多少次，小數點後第 2 位會等於 0。
import { askQuestion } from "./askQuestion.js";
import { divi } from "./calculate.js";

function main() {
  askQuestion((input) => {
    const userAnswer = Number(input);
    const result = divi(userAnswer);
    console.log(`最少除 ${result} 次`);
  });
}

main();
