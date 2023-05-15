export function parseStringToArray(originString) {
  const rowArray = originString.split("\n"); //字串先拆成每行一組
  let twoDimensionalArray = [];
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

export function rotateDirection(array, direction) {
  const rowCount = array.length;
  const columnCount = array[0].length;
  const rotatedArray = [];
  switch (direction) {
    case "right":
      for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
        const newRow = [];
        for (let rowIndex = rowCount - 1; rowIndex >= 0; rowIndex--) {
          newRow.push(array[rowIndex][columnIndex]);
        }
        rotatedArray.push(newRow);
      }
      break;
    case "left":
      for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
        const newRow = [];
        for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
          newRow.push(array[rowIndex][columnIndex]);
        }
        rotatedArray.push(newRow);
      }
      break;
    default:
      console.log(`沒有"${direction}"這個選項，無法旋轉。`);
  }
  return rotatedArray;
}

export function parseArrayToString(array) {
  const rowArray = [];
  let stringPattern;

  array.forEach((subArray) => {
    let innerArray = [];
    innerArray = subArray.join("");
    rowArray.push(innerArray);
  });

  stringPattern = rowArray.join("\n");
  return stringPattern;
}
