// 3. 好想樂園的門票一張400元，優惠6歲(含)以下的孩童和65歲(含)以上的老人半價，
//    試用「比較運算子」寫一程式，讓使用者自行輸入年齡，並判斷門票價錢。

// 1. readline 拿到使用者輸入的值
// 2. 驗證使用者輸入的值 ok往下 -> 3，不行 -> 1 重問
// 3. 判斷年齡區間，並取得票價。
// 4. 印出結果

import { askQuestion } from "../utility/readlineCallback.js";
import { verifyInput } from "./verifyInput.js";
import { getTicketPrice } from "./getTicketPrice.js";

function main() {
  console.log(
    "好想樂園門票一張400元，優惠6歲(含)以下的孩童和65歲(含)以上的老人半價"
  );
  askQuestion("請輸入您的年齡: ", 1, verifyInput, (inputArray) => {
    const verified = Number(inputArray[0]);
    const getTicketPriceResult = getTicketPrice(verified);
    const result = getTicketPriceResult
      ? "票價: 400 元(原價)"
      : "票價: 200 元(半價)";
    console.log(result);
  });
}

main();
