// 11. 好想健身房新開幕，每期會費500元，第一期79折，每滿五期再折200元，
//     請讓使用者自行輸入所需期數，並利用do while計算，印出總費用。
// 每滿五期再折200元: 總期數/滿n期(n抽成變數) = 無條件捨去小數點。
//          首期折扣 +    每期價格    -    滿期折扣
// 第一期:  500*0.79
// 第二期: (500*0.79)+((總期數-1)*500)
// 第五期: (500*0.79)+((總期數-1)*500)-(總期數/n*200)
// 第六期: (500*0.79)+((總期數-1)*500)-(總期數/n*200)
// 第十期: (500*0.79)+((總期數-1)*500)-(總期數/n*200)

import { askQuestion } from "./askQuestion.js";
import { getInput } from "./getInput.js";
import { getMemberFee } from "./getMemberFee.js";

export function main() {
  console.log("好想健身房新開幕，每期會費500元，第一期79折，每滿五期再折200元");
  const question = askQuestion("請輸入期數: ");
  question.then((input) => {
    getInput(input, (number) => {
      const result = getMemberFee(number);
      console.log(`共 ${number} 期，費用: ${result} 元`);
    });
  });
}

main();
