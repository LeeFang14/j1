// 15. 有一輛搬運車，限重1噸 (不能超重)，啞鈴每箱重30kg，單槓每箱重20kg，跑步機一台重50kg，
//     在不將空間列入考慮的情況下，設一陣列 sport[3] 用來儲存三種器材的數量，
//     以一亂數決定每次要搬到車上的器材為何，當超過限重時即停止搬運，並列印出三種器材的個數及總重量。

import { random } from "./random.js";

function main() {
  const sportList = [
    { toolName: "啞鈴", weight: 30, unit: "箱" },
    { toolName: "單槓", weight: 20, unit: "箱" },
    { toolName: "跑步機", weight: 50, unit: "台" },
  ];

  const { sport, totalWeight } = random(sportList, 1000);
  const output = sportList
    .map(({ toolName, unit }, index) => {
      return `${toolName}: ${sport[index]} ${unit}`;
    })
    .join(", ");

  console.log(`${output} ,總重 ${totalWeight} KG`);
}

main();
