export function parseStringToArray(originString) {
  const rowArray = originString.split("\n");
  const columnLength = Math.max(...rowArray.map((row) => row.length));

  const twoDimensionalArray = rowArray
    .map((row) => row.padEnd(columnLength, " "))
    .map((row) => row.split(""));
  return twoDimensionalArray;
}

export function rotateDirection(array, direction) {
  const rowCount = array.length;
  const columnCount = array[0].length;
  const rotatedArray = [];
  switch (direction) {
    case "right":
      turnRight(array, rowCount, columnCount, rotatedArray);
      break;
    case "left":
      turnLeft(array, rowCount, columnCount, rotatedArray);
      break;
  }
  return rotatedArray;
}

function turnRight(array, rowCount, columnCount, rotatedArray) {
  for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
    const newRow = [];
    for (let rowIndex = rowCount - 1; rowIndex >= 0; rowIndex--) {
      newRow.push(array[rowIndex][columnIndex]);
    }
    rotatedArray.push(newRow);
  }
}

function turnLeft(array, rowCount, columnCount, rotatedArray) {
  for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
    const newRow = [];
    for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
      newRow.push(array[rowIndex][columnIndex]);
    }
    rotatedArray.push(newRow);
  }
}

export function parseArrayToString(array) {
  return array
    .map((columnArray) => {
      let innerArray = [];
      innerArray = columnArray.join("");
      return innerArray;
    })
    .join("\n");
}
