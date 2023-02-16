// 2. 使用者輸入兩個整數，將它們分別除以 3，判斷餘數是否相同，
//    若相同，則於螢幕上顯示「餘數相同」。
// first % 3 === second % 3

import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({ input, output });

function askFirstQuestion() {
  rl.question("請輸入第一個數字: ", askSecondQuestion);
}

// 拿答案
function askSecondQuestion(answerOne) {
  rl.question("請輸入第二個數字: ", (answerTwo) => {
    // 判斷是不是數字
    if (isNaN(answerOne) || isNaN(answerTwo)) {
      console.log("輸入錯誤，請重新輸入。");
      askFirstQuestion();
    } else {
      // mod 會轉型成數字
      const first = answerOne % 3;
      const second = answerTwo % 3;
      isEqual(first, second);
    }
  });
}

// 判斷是否一樣
function isEqual(first, second) {
  if (first === second) {
    console.log("餘數相同");
  } else {
    console.log("餘數不同");
  }
  rl.close();
}

askFirstQuestion();
