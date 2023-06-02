import { random } from "./random.js";

describe("random", () => {
  test("should return valid sport and total weight", () => {
    const sportList = [
      { toolName: "啞鈴", weight: 30, unit: "箱" },
      { toolName: "單槓", weight: 20, unit: "箱" },
      { toolName: "跑步機", weight: 50, unit: "台" },
    ];
    const maxWeight = 1000;

    const result = random(sportList, maxWeight);

    expect(result.totalWeight).toBeLessThanOrEqual(maxWeight);
    expect(result.sport.length).toBe(sportList.length);
    const sum = result.sport.reduce(
      (acc, curr, index) => acc + curr * sportList[index].weight,
      0
    );
    expect(sum).toBe(result.totalWeight);
  });
});
