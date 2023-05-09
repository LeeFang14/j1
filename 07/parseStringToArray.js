export function parseStringToArray(originString) {
  const rowArray = originString.split("\n"); //字串先拆成每行一組
  const twoDimensionalArray = [];
  const subArrayLength = []; //要處理子陣列一樣長度，所以存每個子陣列長度

  rowArray.forEach((row) => {
    const charsArray = row.split(""); // 每行一組再拆裡面字串多組
    subArrayLength.push(charsArray.length); // 每個array長度
    twoDimensionalArray.push(charsArray);
  });

  const subArrayLengthMax = Math.max(...subArrayLength); // 取子陣列最大數

  twoDimensionalArray.forEach((subArray) => {
    if (subArray.length < subArrayLengthMax) {
      for (let index = subArray.length; index < subArrayLengthMax; index++) {
        subArray.push(" ");
        // 以子陣列最大數，讓每一子陣列一樣
      }
    }
  });
  return twoDimensionalArray;
}
