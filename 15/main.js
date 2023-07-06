// 15. 有一輛搬運車，限重1噸 (不能超重)，啞鈴每箱重30kg，單槓每箱重20kg，跑步機一台重50kg，
//     在不將空間列入考慮的情況下，設一陣列 sport[3] 用來儲存三種器材的數量，
//     以一亂數決定每次要搬到車上的器材為何，當超過限重時即停止搬運，並列印出三種器材的個數及總重量。

// 對題目理解，每次搬都會判斷會不會超重，會超重時那一個就不會上車並直接停止。
// (不會再去找符合剩餘重量內的器材，即不會讓總重最接近或等於限重)

import { Q15 } from "./Q15.js";
console.log();

function main() {
  const sportList = [
    { toolName: "啞鈴", weight: 30, unit: "箱" },
    { toolName: "單槓", weight: 20, unit: "箱" },
    { toolName: "跑步機", weight: 50, unit: "台" },
  ];
  const weightLimit = 1000;
  const message = Q15(sportList, weightLimit);
  console.log(message);
}

main();
