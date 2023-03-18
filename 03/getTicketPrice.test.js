import { getTicketPrice } from "./getTicketPrice.js";

describe("測試 getTicketPrice 輸入的值", function () {
  test("輸入6 要等於 票價: 200元(半票)", function () {
    expect(getTicketPrice(6)).toBe("票價: 200元(半票)");
  });
  test("輸入7 要等於 票價: 400元(全票)", function () {
    expect(getTicketPrice(7)).toBe("票價: 400元(全票)");
  });
  test("輸入64 要等於 票價: 400元(全票)", function () {
    expect(getTicketPrice(64)).toBe("票價: 400元(全票)");
  });
  test("輸入65 要等於 票價: 200元(半票)", function () {
    expect(getTicketPrice(65)).toBe("票價: 200元(半票)");
  });
});
