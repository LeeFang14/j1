import { calculateMember } from "./calculate.js";

describe("calculateMember", () => {
  test("測試 calculateMember 計算後數字要正確", () => {
    const gymFeeCalculator = calculateMember({
      baseFee: 500,
      firstPeriodDiscount: 0.79,
      periodDiscount: 5,
      periodDiscountPrice: 200,
    });
    expect(gymFeeCalculator(1)).toBe(395);
    expect(gymFeeCalculator(2)).toBe(895);
    expect(gymFeeCalculator(10)).toBe(4495);
  });
});
