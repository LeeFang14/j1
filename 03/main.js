// 3. 好想樂園的門票一張400元，優惠6歲(含)以下的孩童和65歲(含)以上的老人半價，
//    試用「比較運算子」寫一程式，讓使用者自行輸入年齡，並判斷門票價錢。

import promptSync from "prompt-sync";
import { Q3 } from "./Q3.js";
const prompt = promptSync({ sigint: true });

function main() {
  console.log(
    "好想樂園門票每張原價400元,「6歲(含)以下與65歲(含)以上」優惠半價。"
  );
  try {
    const input = prompt("請輸入您的年齡: ");
    const actualTicketPrice = Q3(input);
    console.log(actualTicketPrice);
  } catch (error) {
    console.log("需輸入整數，請重新輸入！");
    main();
  }
}
main();
