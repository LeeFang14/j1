// 8. 試寫一程式，讓使用者輸入一正整數n值，並撰寫一遞迴函數
//    function divi(n) 來求算當 n 值不斷除以 3 時，
//    最少要除多少次，小數點後第 2 位會等於 0。
import { askQuestion } from "./askQuestion.js";
import { divi } from "./calculate.js";

function main() {
  askQuestion("請輸入一個正整數: ", (number) => {
    const result = divi(number, 3);
    console.log(`最少要除 ${result} 次`);
  });
}

main();
