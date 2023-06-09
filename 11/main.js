// 11. 好想健身房新開幕，每期會費500元，第一期79折，每滿五期再折200元，
//     請讓使用者自行輸入所需期數，並利用do while計算，印出總費用。

import { getInputArray } from "../utility/readlinePromise.js";
import { verifyInput } from "./verifyInput.js";
import { calculateMember } from "./calculate.js";

export function main() {
  console.log("好想健身房新開幕，每期會費500元，第一期79折，每滿五期再折200元");
  getInputArray("請輸入期數: ", 1, verifyInput).then((inputArray) => {
    const verified = Number(inputArray[0]);
    const gymFeeCalculator = calculateMember({
      baseFee: 500,
      firstPeriodDiscount: 0.79,
      periodDiscount: 5,
      periodDiscountPrice: 200,
    });
    const result = gymFeeCalculator(verified);
    const message = `共 ${verified} 期，總金額: ${result} 元`;
    console.log(message);
  });
}

main();
