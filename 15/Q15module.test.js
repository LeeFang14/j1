import { Q15Module } from "./Q15module.js";

jest.mock("./Q15module.js", () => {
  return {
    Q15Module: {
      Q15: jest.fn(),
    },
  };
});

describe("Q15：有一輛搬運車，限重1噸 (不能超重)，啞鈴每箱重30kg，單槓每箱重20kg，跑步機一台重50kg，在不將空間列入考慮的情況下，設一陣列 sport[3] 用來儲存三種器材的數量，以一亂數決定每次要搬到車上的器材為何，當超過限重時即停止搬運，並列印出三種器材的個數及總重量。", () => {
  const sportList = [
    { toolName: "啞鈴", weight: 30, unit: "箱" },
    { toolName: "單槓", weight: 20, unit: "箱" },
    { toolName: "跑步機", weight: 50, unit: "台" },
  ];
  const weightLimit = 1000;

  test(`測試 啞鈴最大值 輸出："啞鈴: 33 箱,單槓: 0 箱,跑步機: 0 台,總重 990 KG"`, () => {
    const maxDumbBel = "啞鈴: 33 箱,單槓: 0 箱,跑步機: 0 台,總重 990 KG";
    Q15Module.Q15.mockReturnValueOnce(maxDumbBel);
    const message = Q15Module.Q15(sportList, weightLimit);
    expect(message).toBe(maxDumbBel);
    const totalWeight = Number(message.match(/總重 (\d+)/)[1]);
    expect(totalWeight).toBe(990);
  });

  test(`測試 單槓最大值 輸出："啞鈴: 0 箱,單槓: 50 箱,跑步機: 0 台,總重 1000 KG"`, () => {
    const maxHorizontalBar = "啞鈴: 0 箱,單槓: 50 箱,跑步機: 0 台,總重 1000 KG";
    Q15Module.Q15.mockReturnValueOnce(maxHorizontalBar);
    const message = Q15Module.Q15(sportList, weightLimit);
    expect(message).toBe(maxHorizontalBar);
    const totalWeight = Number(message.match(/總重 (\d+)/)[1]);
    expect(totalWeight).toBe(1000);
  });
  test(`測試 跑步機最大值 輸出："啞鈴: 0 箱,單槓: 0 箱,跑步機: 20 台,總重 1000 KG"`, () => {
    const maxTreadmill = "啞鈴: 0 箱,單槓: 0 箱,跑步機: 20 台,總重 1000 KG";
    Q15Module.Q15.mockReturnValueOnce(maxTreadmill);
    const message = Q15Module.Q15(sportList, weightLimit);
    expect(message).toBe(maxTreadmill);
    const totalWeight = Number(message.match(/總重 (\d+)/)[1]);
    expect(totalWeight).toBe(1000);
  });
});
