// 1. 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。
//    讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。

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
  rl.question("請輸入看電影人數: ", main);
}

function main(input) {
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
}

getUserInput();
