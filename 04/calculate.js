// 生成陣列(奇數會*-1轉成負數)
export function generateSequence(number) {
  let resultArray = [];
  for (let index = 1; index <= number; index++) {
    if (index > 1 && index % 2 !== 0) {
      resultArray.push(index * -1);
    } else {
      resultArray.push(index);
    }
  }
  return resultArray;
}

export function generateFormula(array) {
  let resultString = "";
  resultString = array[0].toString();
  for (let index = 1; index < array.length; index++) {
    const arrayToString = array[index].toString();
    if (array[index] > 1) {
      resultString += "+" + arrayToString;
    } else {
      resultString += arrayToString;
    }
  }
  return resultString;
}

export function calculateSum(array) {
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}
