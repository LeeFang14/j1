import { isPrime } from "./isPrime.js";

describe("測試 isPrime：輸入的值，是不是質數", function () {
  test(`輸入:1 輸出: false`, function () {
    expect(isPrime(1)).toBeFalsy();
  });
  test(`輸入:3 輸出: true`, function () {
    expect(isPrime(3)).toBeTruthy();
  });
  test(`輸入:5 輸出: true`, function () {
    expect(isPrime(5)).toBeTruthy();
  });
  test(`輸入:9 輸出: false`, function () {
    expect(isPrime(9)).toBeFalsy();
  });
});
