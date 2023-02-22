// 將輸入者的資料輸出成陣列，如果 > 1 的奇數圈，要乘以(-1)。
function getAnswer(num) {
  let getAnswerArr = [];
  for (let i = 1; i <= num; i++) {
    if (i > 1 && i % 2 !== 0) {
      getAnswerArr.push(i * -1);
    } else {
      getAnswerArr.push(i);
    }
  }
  // sumAnswer(getAnswerArr);
  return getAnswerArr;
}

// 加總拿到的值，用array Methods reduce
function sumAnswer(arr) {
  const sumArrValue = arr.reduce((add, num) => add + num, 0);
  console.log(sumArrValue);
  rl.close();
}
