// 2. 使用者輸入兩個整數，將它們分別除以 3，判斷餘數是否相同，
//    若相同，則於螢幕上顯示「餘數相同」。

import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import {
  isNumber,
  isPlusZero,
  isMinusZero,
  isInteger,
} from "../modules/verify.js";
import { isModEqual } from "./isModEqual.js";
const rl = readline.createInterface({ input, output });

function main() {
  let userInputOne;
  let userInputTwo;
  console.log("請輸入兩個整數");
  askQuestionOne();
  function askQuestionOne() {
    rl.question("請輸入第一個數字: ", (inputOne) => {
      try {
        isNumber(inputOne);
        isPlusZero(inputOne);
        isMinusZero(inputOne);
        inputOne = Number(inputOne);
        isInteger(inputOne);
        userInputOne = inputOne;
        askQuestionTwo();
        function askQuestionTwo() {
          rl.question("請輸入第二個數字: ", (inputTwo) => {
            try {
              isNumber(inputTwo);
              isPlusZero(inputTwo);
              isMinusZero(inputTwo);
              inputTwo = Number(inputTwo);
              isInteger(inputTwo);
              userInputTwo = inputTwo;
              rl.close();
              const result = isModEqual(userInputOne, userInputTwo);
              console.log(result);
            } catch (error) {
              console.log(`${error.message}，請重新輸入`);
              askQuestionTwo();
            }
          });
        }
      } catch (error) {
        console.log(`${error.message}，請重新輸入`);
        askQuestionOne();
      }
    });
  }
}

main();
