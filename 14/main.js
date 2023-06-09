// 14. 細菌實驗中，原有 b隻細菌，每經過20分鐘細菌數量會增加為原來的2倍(2b)，
//     試寫一遞迴函數function twofold(b, m)。
//     讓使用者輸入分鐘數 m，並計算在沒有細菌死亡的狀況下，m 分鐘後的細菌有幾隻。

// 對題目理解，不到20分鐘，不會有任何情況發生(不會在第10分鐘出現1.5的增生)。
// 1. 拿到使用者輸入的分鐘數
// 2. 遞迴：原始細菌數 每-20分鐘 上一次結果*2 、終止條件：不足20分鐘
// 3. 印出結果

import { getInputArray } from "../utility/readlinePromise.js";
import { twofold } from "./twofold.js";
import { verifyInput } from "./verifyInput.js";

function main() {
  getInputArray("請輸入分鐘數(正整數): ", 1, verifyInput).then((inputArray) => {
    const minute = Number(inputArray[0]);
    const originBacteria = 1;
    const grownBacteria = twofold(originBacteria, minute);
    const message = `細菌目前有 ${originBacteria} 隻，在 ${minute} 分鐘後，細菌有 ${grownBacteria} 隻。`;
    console.log(message);
  });
}

main();
