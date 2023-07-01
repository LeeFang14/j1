// 8.試寫一程式，讓使用者輸入一正整數n值，並撰寫一遞迴函數
//   function divi(n) 來求算當 n 值不斷除以 3 時，
//   最少要除多少次，小數點後第 2 位會等於 0。

import promptSync from "prompt-sync";
import { Q8 } from "./Q8.js";
const prompt = promptSync({ sigint: true });

function main() {
  try {
    const strInput = prompt("請輸入一個正整數: ");
    const numDividedByThree = Q8(strInput);
    console.log(numDividedByThree);
  } catch (error) {
    console.log("輸入錯誤，請重新輸入");
    main();
  }
}

main();
