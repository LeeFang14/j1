import { Q10 } from "./Q10.js";

describe("測試 Q10 會輸出", () => {
  test(`輸入"3, 50, 0, 13, 2, 4, 11"，應輸出"質數 3 索引 0 , 質數 13 索引 3 , 質數 2 索引 4 , 質數 11 索引 6"`, () => {
    expect(Q10([3, 50, 0, 13, 2, 4, 11])).toEqual(
      "質數 3 索引 0\n質數 13 索引 3\n質數 2 索引 4\n質數 11 索引 6"
    );
  });
});
