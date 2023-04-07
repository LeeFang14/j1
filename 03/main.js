// 3. 好想樂園的門票一張400元，優惠6歲(含)以下的孩童和65歲(含)以上的老人半價，
//    試用「比較運算子」寫一程式，讓使用者自行輸入年齡，並判斷門票價錢。

import { askQuestion } from "./askQuestion.js";
import { getTicketPrice } from "./getTicketPrice.js";

function main() {
  console.log(
    "好想樂園門票一張400元，優惠6歲(含)以下的孩童和65歲(含)以上的老人半價"
  );
  askQuestion((input) => {
    const num = Number(input);
    const result = getTicketPrice(num);
    console.log(result);
  });
}

main();
