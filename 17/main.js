// 17. 運用 Borda Count。算出下面的候選人分數。
// (第一順位得4分、第二順位得3分、第三順位得2分、第四順位得1分)
//   #     51票   5票   23票  21票
// 第1順位    1     3    2     4
// 第2順位    3     2    3     3
// 第3順位    2     4    4     2
// 第4順位    4     1    1     1

function main() {
  const candidateList = [
    { candidateNumber: 1, result: [1, 4, 4, 4] },
    { candidateNumber: 2, result: [3, 2, 1, 3] },
    { candidateNumber: 3, result: [2, 1, 2, 2] },
    { candidateNumber: 4, result: [4, 3, 3, 1] },
  ];
  const eachTicket = [51, 5, 23, 21];
  candidateList
    .map((item) => {
      return item.result.map(
        (item, index) => getScore(item) * eachTicket[index]
      );
    })
    .map((item) => sumArray(item))
    .forEach((item, index) => {
      console.log(
        `${candidateList[index].candidateNumber}號候選人得票分數: ${item} 分;`
      );
    });
}

main();

function getScore(item) {
  switch (item) {
    case 1:
      return 4;
    case 2:
      return 3;
    case 3:
      return 2;
    case 4:
      return 1;
  }
}

function sumArray(array) {
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}
