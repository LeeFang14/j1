import { Q15 } from "./Q15module.js";

describe("Q15：有一輛搬運車，限重 1 噸 (不能超重)，啞鈴每箱重 30kg，單槓每箱重 20kg，跑步機一台重 50kg，在不將空間列入考慮的情況下，設一陣列 sport[3] 用來儲存三種器材的數量，以一亂數決定每次要搬到車上的器材為何，當超過限重時即停止搬運，並列印出三種器材的個數及總重量。", () => {
  test("不會超出總重限制", () => {
    const sportList = [
      { toolName: "啞鈴", weight: 30, unit: "箱" },
      { toolName: "單槓", weight: 20, unit: "箱" },
      { toolName: "跑步機", weight: 50, unit: "台" },
    ];
    const weightLimit = 1000;
    const message = Q15(sportList, weightLimit);
    console.log(message);
    // 取字串裡面的總重轉成數字
    const weightTotal = Number(message.match(/總重 (\d+)/)[1]);
    // 比較總重是否有小於等於限重
    const isLessOrEqual = weightTotal <= weightLimit ? true : false;
    expect(isLessOrEqual).toBe(true);
  });
});
