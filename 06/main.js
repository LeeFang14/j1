// 6. 宣告陣列 name，讓使用者自行輸入四個英文名字於陣列中，輸出第一個和第三個名字的單數個字母。

import { askQuestion } from "./askQuestion.js";
import { getOddLiterals } from "./getOddLiterals.js";

function main() {
  console.log("請輸入四個英文名字");
  askQuestion(1, [], (inputArray) => {
    let [name1, name2, name3, name4] = inputArray;
    const answer1 = getOddLiterals(name1);
    console.log(answer1);
    const answer2 = getOddLiterals(name3);
    console.log(answer2);
  });
}

main();
