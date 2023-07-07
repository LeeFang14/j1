import { Q17 } from "./Q17.js";

describe("Q17", () => {
  test(`輸入"候選人與投票結果"，會輸出"每位候選人的得票分數"`, () => {
    const candidateList = [
      { candidateNumber: 1, orderResult: [1, 4, 4, 4] },
      { candidateNumber: 2, orderResult: [3, 2, 1, 3] },
      { candidateNumber: 3, orderResult: [2, 1, 2, 2] },
      { candidateNumber: 4, orderResult: [4, 3, 3, 1] },
    ];
    const votesPerRound = [51, 5, 23, 21];
    const message = Q17(candidateList, votesPerRound);
    expect(message).toBe(
      "1號候選人得票分數: 253 分\n2號候選人得票分數: 251 分\n3號候選人得票分數: 305 分\n4號候選人得票分數: 191 分"
    );
  });
});
