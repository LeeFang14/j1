// 11. 好想健身房新開幕，每期會費500元，第一期79折，每滿五期再折200元，
//     請讓使用者自行輸入所需期數，並利用do while計算，印出總費用。

import { getInputArray } from "../utility/readlinePromise.js";
import { validation } from "./validation.js";
import { calculateMember } from "./calculate.js";

export function main() {
  console.log("好想健身房新開幕，每期會費500元，第一期79折，每滿五期再折200元");
  getInputArray("請輸入期數: ", 1, validation).then((inputArray) => {
    const verified = Number(inputArray[0]);
    const gymFeeCalculator = calculateMember({
      base: 500,
      firstCostOff: 0.79,
      periodDiscount: 5,
      fullCostOff: 200,
    });
    const result = gymFeeCalculator(verified);
    console.log(`共 ${verified} 期，總金額: ${result} 元`);
  });
}

main();
