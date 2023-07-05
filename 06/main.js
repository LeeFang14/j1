// 6. 宣告陣列 name，讓使用者自行輸入四個英文名字於陣列中，
//    輸出第一個和第三個名字的單數個字母。

import { askQuestion } from "../utility/prompt.js";
import { isEmpty, isEnglish } from "../utility/verify.js";
import { Q6 } from "./Q6.js";

function main() {
  try {
    console.log("請輸入四個英文名字");
    const fourEnglishName = [
      getInput("第一個: "),
      getInput("第二個: "),
      getInput("第三個: "),
      getInput("第四個: "),
    ];
    const englishNameOddIndex = Q6(fourEnglishName);
    console.log(englishNameOddIndex);
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
    isEmpty(input);
    isEnglish(input);
  } catch (error) {
    console.log(error.message, "請重新輸入");
    input = getInput(question);
  }
  return input;
}
