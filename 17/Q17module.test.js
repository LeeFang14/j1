import { Q17 } from "./Q17module.js";

describe("Q17：運用 Borda Count。算出下面的候選人分數。", () => {
  test(`輸入"候選人與投票數據"，會輸出\n 1 號候選人的每輪分數:204分+20分+92分+84分=總得分數400分\n 2 號候選人的每輪分數:306分+30分+92分+126分=總得分數554分\n 3 號候選人的每輪分數:306分+20分+138分+126分=總得分數590分\n 4 號候選人的每輪分數:204分+30分+138分+84分=總得分數456分`, () => {
    const originalScore = [
      [51, 1, 3, 2, 4],
      [5, 3, 2, 4, 1],
      [23, 2, 3, 4, 1],
      [21, 4, 3, 2, 1],
    ];

    class Candidate {
      constructor(name) {
        this.name = name;
      }
    }

    const candidateList = [
      new Candidate(1),
      new Candidate(2),
      new Candidate(3),
      new Candidate(4),
    ];

    const message = Q17(originalScore, candidateList);
    console.log(message);
    expect(message).toBe(
      " 1 號候選人的每輪分數:204分+20分+92分+84分=總得分數400分\n 2 號候選人的每輪分數:306分+30分+92分+126分=總得分數554分\n 3 號候選人的每輪分數:306分+20分+138分+126分=總得分數590分\n 4 號候選人的每輪分數:204分+30分+138分+84分=總得分數456分"
    );
  });
});

describe("測試 Q17 更改候選人名稱、不同得票情形", () => {
  test(`輸入"候選人與投票數據"，會輸出\n A 號候選人的每輪分數:60分+126分+210分+28分=總得分數424分\n B 號候選人的每輪分數:90分+84分+140分+42分=總得分數356分\n C 號候選人的每輪分數:90分+126分+210分+28分=總得分數454分\n D 號候選人的每輪分數:60分+84分+140分+42分=總得分數326分"`, () => {
    const originalScore = [
      [15, "A", "C", "B", "D"],
      [21, "D", "A", "C", "B"],
      [35, "B", "C", "A", "D"],
      [7, "A", "D", "B", "C"],
    ];

    class Candidate {
      constructor(name) {
        this.name = name;
      }
    }

    const candidateList = [
      new Candidate("A"),
      new Candidate("B"),
      new Candidate("C"),
      new Candidate("D"),
    ];

    const message = Q17(originalScore, candidateList);
    console.log(message);
    expect(message).toBe(
      " A 號候選人的每輪分數:60分+126分+210分+28分=總得分數424分\n B 號候選人的每輪分數:90分+84分+140分+42分=總得分數356分\n C 號候選人的每輪分數:90分+126分+210分+28分=總得分數454分\n D 號候選人的每輪分數:60分+84分+140分+42分=總得分數326分"
    );
  });
});
