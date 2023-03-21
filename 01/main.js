// 1. 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。
//    讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。

import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import {
  isNumber,
  isPlusZero,
  isMinusZero,
  isInteger,
  isPositiveInt,
} from "../modules/verify.js";
import { isPlayMovie } from "./isPlayMovie.js";
const rl = readline.createInterface({ input, output });

function main() {
  console.log(
    "好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。"
  );
  askQuestion();
  function askQuestion() {
    rl.question("請輸入看電影人數: ", (input) => {
      try {
        isNumber(input);
        isPlusZero(input);
        isMinusZero(input);
        input = Number(input);
        isInteger(input);
        isPositiveInt(input);
        rl.close();
        const result = isPlayMovie(input);
        console.log(result);
      } catch (error) {
        console.log(`${error.message}，請重新輸入`);
        askQuestion();
      }
    });
  }
}

main();
