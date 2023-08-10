import { Q12 } from "./Q12module.js";

describe("Q12：找出 10~20 的質數，並列出前述各質數在 1~100 的倍數", () => {
  test(`輸入"10,20"，會輸出"\n質數11乘1到100後，介於1到100的值: 11,22,33,44,55,66,77,88,99\n質數13乘1到100後，介於1到100的值: 13,26,39,52,65,78,91\n質數17乘1到100後，介於1到100的值: 17,34,51,68,85\n質數19乘1到100後，介於1到100的值: 19,38,57,76,95"`, () => {
    expect(Q12(10, 20)).toBe(
      "質數11乘1到100後，介於1到100的值: 11,22,33,44,55,66,77,88,99\n質數13乘1到100後，介於1到100的值: 13,26,39,52,65,78,91\n質數17乘1到100後，介於1到100的值: 17,34,51,68,85\n質數19乘1到100後，介於1到100的值: 19,38,57,76,95"
    );
  });
});