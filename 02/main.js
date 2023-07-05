// 2. 使用者輸入兩個整數，將它們分別除以3，判斷餘數是否相同，若相同，則於螢幕上顯示「餘數相同」。

import { askQuestion } from "../utility/prompt.js";
import { isZero, isInteger } from "../utility/verify.js";
import { Q2 } from "./Q2.js";

function main() {
  try {
    console.log("請輸入兩個整數");
    const twoInteger = [getInput("第一個: "), getInput("第二個: ")];
    const message = Q2(twoInteger);
    console.log(message);
  } catch (error) {
    console.log(error.message, "請重新輸入");
    main();
  }
}

main();

function getInput(question) {
  let input = "";
  try {
    input = askQuestion(question);
    isZero(input);
    isInteger(input);
  } catch (error) {
    console.log(error.message, "請重新輸入");
    input = getInput(question);
  }
  return input;
}
