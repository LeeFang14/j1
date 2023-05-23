export function parseStringToArray(originString) {
  const rowArray = originString.split("\n"); // 拆成每列
  let twoDimensionalArray = [];
  const columnLength = [];

  rowArray.forEach((row) => {
    const columnArray = row.split(""); // 拆成每欄
    twoDimensionalArray.push(columnArray);
    columnLength.push(columnArray.length); // 收集幾欄
  });

  const columnLengthMax = Math.max(...columnLength); // 取子陣列最大數

  twoDimensionalArray.forEach((columnArray) => {
    if (columnArray.length < columnLengthMax) {
      for (let index = columnArray.length; index < columnLengthMax; index++) {
        columnArray.push(" ");
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
  }
  return rotatedArray;
}

export function parseArrayToString(array) {
  const rowArray = [];
  let stringPattern = "";

  array.forEach((columnArray) => {
    let innerArray = [];
    innerArray = columnArray.join("");
    rowArray.push(innerArray);
  });

  stringPattern = rowArray.join("\n");
  return stringPattern;
}
