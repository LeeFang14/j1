// 14. 細菌實驗中，原有 b隻細菌，每經過20分鐘細菌數量會增加為原來的2倍(2b)，
//     試寫一遞迴函數function twofold(b, m)。
//     讓使用者輸入分鐘數 m，並計算在沒有細菌死亡的狀況下，m 分鐘後的細菌有幾隻。

import { askQuestion } from "../utility/prompt.js";
import { Q14 } from "./Q14module.js";

function main() {
  try {
    const input = askQuestion("請輸入分鐘數(正整數): ");
    const message = Q14(input);
    console.log(message);
  } catch (error) {
    console.log(error.message, "請重新輸入");
    main();
  }
}

main();
