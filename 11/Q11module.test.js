import { Q11 } from "./Q11module.js";

describe("Q11：好想健身房新開幕，每期會費 500 元，第一期 79 折，每滿五期再折 200 元，請讓使用者自行輸入所需期數，並利用`do while`計算，印出總費用。", () => {
  const gymMembershipFee = {
    baseFee: 500,
    firstPeriodPercentDiscount: 0.79,
    periodDiscount: 5,
    periodDiscountPrice: 200,
  };
  test(`輸入"5"，會輸出"共5期，原價2500元-首期折扣105元-滿額折扣200元=總金額2195 元。"`, () => {
    expect(Q11("5", gymMembershipFee)).toBe(
      "共5期，原價2500元-首期折扣105元-滿額折扣200元=總金額2195 元。"
    );
  });
  test(`輸入"10"，會輸出"共10期，原價5000元-首期折扣105元-滿額折扣400元=總金額4495 元。"`, () => {
    expect(Q11("10", gymMembershipFee)).toBe(
      "共10期，原價5000元-首期折扣105元-滿額折扣400元=總金額4495 元。"
    );
  });
});

describe("測試 Q11 不同費用、優惠的情況，每期會費 650 元，第一期 8 折，每滿五期再折 250 元，", () => {
  const gymMembershipFee = {
    baseFee: 650,
    firstPeriodPercentDiscount: 0.8,
    periodDiscount: 5,
    periodDiscountPrice: 250,
  };
  test(`輸入"5"，會輸出"共5期，原價3250元-首期折扣130元-滿額折扣250元=總金額2870 元。"`, () => {
    expect(Q11("5", gymMembershipFee)).toBe(
      "共5期，原價3250元-首期折扣130元-滿額折扣250元=總金額2870 元。"
    );
  });
  test(`輸入"10"，會輸出"共10期，原價6500元-首期折扣130元-滿額折扣500元=總金額5870 元。"`, () => {
    expect(Q11("10", gymMembershipFee)).toBe(
      "共10期，原價6500元-首期折扣130元-滿額折扣500元=總金額5870 元。"
    );
  });
});

describe("測試 Q11 以下都會拋出異常", () => {
  test("無輸入", () => {
    expect(() => Q11("")).toThrow();
  });
  test("輸入空格", () => {
    expect(() => Q11(" ")).toThrow();
  });
  test("輸入0", () => {
    expect(() => Q11("0")).toThrow();
  });
  test("輸入+0", () => {
    expect(() => Q11("+0")).toThrow();
  });
  test("輸入-0", () => {
    expect(() => Q11("-0")).toThrow();
  });
  test("輸入0.5", () => {
    expect(() => Q11("0.5")).toThrow();
  });
  test("輸入-5", () => {
    expect(() => Q11("-5")).toThrow();
  });
  test("輸入中文", () => {
    expect(() => Q11("中文")).toThrow();
  });
  test("輸入english", () => {
    expect(() => Q11("english")).toThrow();
  });
});
