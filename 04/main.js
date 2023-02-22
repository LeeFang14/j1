// 4. 輸入 n 印出 1+2-3+4-5+6-7...n 的算式與總和
// for (let i ; i=<n ;i++) { n++ }
// 1 + 2 + (-3) + 4 + (-5) + 6 + (-7)

import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({ input, output });
import {
  isNumber,
  isInteger,
  isPositiveInt,
  isPlusZero,
  isMinusZero,
} from "../modules/verify.js";

function getUserInput() {
  rl.question("請輸入一個正整數: ", main);
}

// 排除掉負數和小數，只接受正整數。
function isPositiveInt(input) {
  let num = Number(input);
  if (num < 0 || num % 1 !== 0) {
    console.log("輸入錯誤，請重新輸入。");
    askQuestion();
  } else {
    return;
    // getAnswer(answer); // 改成return
  }
}

function main(input) {}
try {
  isNumber(input);
  isPlusZero(input);
  isMinusZero(input);
  const UserAnswer = Number(input);
  isInteger(UserAnswer);
  isPositiveInt(UserAnswer);

  const result = UserAnswer !== 0 ? "照常播放電影" : "不播放電影";
  console.log(result);
  rl.close();
} catch (error) {
  console.log(`${error.message}，請重新輸入`);
  getUserInput();
}

getUserInput();
