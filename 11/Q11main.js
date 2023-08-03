// 11. 好想健身房新開幕，每期會費500元，第一期79折，每滿五期再折200元，
//     請讓使用者自行輸入所需期數，並利用do while計算，印出總費用。

import { askQuestion } from "../utility/prompt.js";
import { Q11 } from "./Q11module.js";

function main() {
  try {
    console.log(
      "好想健身房新開幕，每期會費500元，第一期79折，每滿五期再折200元"
    );
    const gymMembershipFee = {
      baseFee: 500,
      firstPeriodPercentDiscount: 0.79,
      periodDiscount: 5,
      periodDiscountPrice: 200,
    };
    const input = askQuestion("請輸入期數: ");
    const result = Q11(input, gymMembershipFee);
    console.log(result);
  } catch (error) {
    console.log(error.message);
    main();
  }
}

main();
