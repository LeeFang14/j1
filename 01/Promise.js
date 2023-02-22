import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { resolve } from "node:path";
const rl = readline.createInterface({ input, output });
import {
  isNumber,
  isInteger,
  isPositiveInt,
  isPlusZero,
  isMinusZero,
} from "../modules/verify.js";

function main() {
  function getUserInput() {
    return rl.question("請輸入看電影人數: ").then((input) => {
      try {
        isNumber(input);
        isPlusZero(input);
        isMinusZero(input);
        const UserAnswer = Number(input);
        isInteger(UserAnswer);
        isPositiveInt(UserAnswer);
        rl.close();
        return UserAnswer;
      } catch (error) {
        console.log(`${error.message}，請重新輸入`);
        return getUserInput();
      }
    });
  }

  getUserInput().then((input) => {
    const result = input !== 0 ? "照常播放電影" : "不播放電影";
    console.log(result);
  });
}

main();
