// 生成陣列(奇數會*-1轉成負數)
function generateSequence(num) {
  let resultArr = [];
  for (let i = 1; i <= num; i++) {
    if (i > 1 && i % 2 !== 0) {
      resultArr.push(i * -1);
    } else {
      resultArr.push(i);
    }
  }
  return resultArr;
}

function generateFormula(arr) {
  let resultStr = "";
  resultStr = arr[0].toString();
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > 1) {
      resultStr += "+" + arr[i].toString();
    } else {
      resultStr += arr[i].toString();
    }
  }
  return resultStr;
}

function calculateSum(arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

export { generateSequence, generateFormula, calculateSum };
