// 6. 宣告陣列 name，讓使用者自行輸入四個英文名字於陣列中，輸出第一個和第三個名字的單數個字母。

import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({ input, output });

const Q1 = "請輸入第一個英文名字: ";
const Q2 = "請輸入第二個英文名字: ";
const Q3 = "請輸入第三個英文名字: ";
const Q4 = "請輸入第四個英文名字: ";

const questionArr = [Q1, Q2, Q3, Q4];
let name = [];
const askQuestion = (i) => {
  if (i < questionArr.length) {
    rl.question(questionArr[i], (answer) => {
      name.push(answer);
      askQuestion(i + 1);
    });
  } else {
    getOddName(name);
  }
};

// 錯誤輸入可能會有：空白(例如第三個剛好空白，第四個要補在第三個？還是讓使用者重新輸入？)
// 只允許輸入英文，A~Z 大小寫要計算重複嗎？

function getOddName(a) {
  // console.log(a);
  let OddName = a.filter(function (i) {
    if (i < questionArr.length) {
    }
  });
  rl.close();
}

askQuestion(0);
