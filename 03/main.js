// 3. 好想樂園的門票一張400元，優惠6歲(含)以下的孩童和65歲(含)以上的老人半價，
//    試用「比較運算子」寫一程式，讓使用者自行輸入年齡，並判斷門票價錢。
// age < 6 || age >= 65 半價：200元 ， else 400元

import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({ input, output });

function askQuestion() {
  rl.question("請輸入您的年齡: ", isPositiveInt);
}

// 排除掉負數和小數，只接受正整數。
function isPositiveInt(answer) {
  const age = Number(answer);
  if (age < 0 || age % 1 !== 0) {
    console.log("輸入錯誤，請重新輸入。");
    askQuestion();
  } else {
    getPrice(age);
  }
}

// 判斷價格
function getPrice(age) {
  if (age > 6 && age < 65) {
    console.log("票價:400元");
  } else {
    console.log("票價:200元");
  }
  rl.close();
}

askQuestion();
