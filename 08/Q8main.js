// 8.試寫一程式，讓使用者輸入一正整數n值，並撰寫一遞迴函數
//   function divi(n) 來求算當 n 值不斷除以 3 時，
//   最少要除多少次，小數點後第 2 位會等於 0。

import { askQuestion } from "../utility/prompt.js";
import { Q8 } from "./Q8module.js";

function main() {
  try {
    const input = askQuestion("請輸入一個正整數: ");
    const divisionByThree = Q8(input);
    console.log(divisionByThree);
  } catch (error) {
    console.log(error.message);
    main();
  }
}

main();
