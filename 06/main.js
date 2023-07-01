// 6. 宣告陣列 name，讓使用者自行輸入四個英文名字於陣列中，
//    輸出第一個和第三個名字的單數個字母。

import promptSync from "prompt-sync";
import { isEmpty, isEnglish } from "../utility/verify.js";
import { Q6 } from "./Q6.js";
const prompt = promptSync({ sigint: true });

function main() {
  console.log("請輸入四個英文名字");
  const strFourEnglishName = [
    getInput("第一個: "),
    getInput("第二個: "),
    getInput("第三個: "),
    getInput("第四個: "),
  ];
  const englishNameOddIndex = Q6(strFourEnglishName).join("\n");
  console.log(englishNameOddIndex);
}

main();

function getInput(question) {
  let input = "";
  try {
    input = prompt(question);
    isEmpty(input);
    isEnglish(input);
  } catch (error) {
    console.log("需輸入整數，請重新輸入");
    input = getInput(question);
  }
  return input;
}
