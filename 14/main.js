// 14. 細菌實驗中，原有 b隻細菌，每經過20分鐘細菌數量會增加為原來的2倍(2b)，
//     試寫一遞迴函數function twofold(b, m)。
//     讓使用者輸入分鐘數 m，並計算在沒有細菌死亡的狀況下，m 分鐘後的細菌有幾隻。
//   0m  20m  20m  20m  20m
//   1   1*2  2*2  4*2  8*2  上一次的結果*2，跑幾次看20分鐘有幾個
import { getInputArray } from "../utility/readlinePromise.js";
import { calculateTwofold } from "./calculateTwofold.js";
import { validation } from "./validation.js";

function main() {
  getInputArray("請輸入分鐘數(正整數): ", 1, validation).then((inputArray) => {
    const minute = Number(inputArray[0]);
    const bacteria = 1;
    const twofold = calculateTwofold(20, 2); // 每經過20分鐘，細菌數增加2倍。
    const result = twofold(bacteria, minute);
    console.log(
      `細菌目前有 ${bacteria} 隻，在 ${minute} 分鐘後，細菌有 ${result} 隻。`
    );
  });
}

main();
