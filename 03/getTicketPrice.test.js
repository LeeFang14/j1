import { getTicketPrice } from "./getTicketPrice.js";

describe.each([
  { input: getTicketPrice(6), expected: false },
  { input: getTicketPrice(7), expected: true },
  { input: getTicketPrice(64), expected: true },
  { input: getTicketPrice(65), expected: false },
])("測試 getTicketPrice 輸入的值", ({ input, expected }) => {
  test(`returns ${expected}`, () => {
    expect(input).toBe(expected);
  });
});
