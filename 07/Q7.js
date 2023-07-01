export function Q7(strOriginPattern, strRotateDirection, numRotate) {
  if (strRotateDirection !== "right" && strRotateDirection !== "left") {
    console.log(`沒有 "${strRotateDirection}" 這個選項，無法旋轉。`);
    return;
  } else {
    const baseAngle = 90;
    const rotateAngle = baseAngle * numRotate;
    const arr2DArray = parseStrTo2DArr(strOriginPattern);
    const arrRotated2DArray = rotate2DArray(
      arr2DArray,
      strRotateDirection,
      numRotate
    );
    const strNewPattern = parseArrToStr(arrRotated2DArray);
    return `turn ${strRotateDirection} ${rotateAngle}° :
${strNewPattern}`;
  }
}

function parseStrTo2DArr(String) {
  const arrAow = String.split("\n");
  const numMaxLengthColumn = Math.max(...arrAow.map((row) => row.length));
  const arr2DArray = arrAow
    .map((row) => row.padEnd(numMaxLengthColumn, " "))
    .map((row) => row.split(""));
  return arr2DArray;
}

function rotate2DArray(arr2DArray, direction, numRotate) {
  let rotated2DArray = arr2DArray;
  for (let currentRotate = 0; currentRotate < numRotate; currentRotate++) {
    rotated2DArray = rotateArray(rotated2DArray, direction);
  }
  return rotated2DArray;
}

function parseArrToStr(array) {
  return array
    .map((arrColumn) => {
      let strColumn = [];
      strColumn = arrColumn.join("");
      return strColumn;
    })
    .join("\n");
}

function rotateArray(arr2DArray, rotateDirection) {
  const numRowCount = arr2DArray.length;
  const numColumnCount = arr2DArray[0].length;
  const arrRotated2DArray = [];
  switch (rotateDirection) {
    case "right":
      turnRight(arr2DArray, numRowCount, numColumnCount, arrRotated2DArray);
      break;
    case "left":
      turnLeft(arr2DArray, numRowCount, numColumnCount, arrRotated2DArray);
      break;
  }
  return arrRotated2DArray;
}

function turnRight(arr2DArray, numRowCount, numColumnCount, arrRotated2DArray) {
  for (let columnIndex = 0; columnIndex < numColumnCount; columnIndex++) {
    const newRow = [];
    for (let rowIndex = numRowCount - 1; rowIndex >= 0; rowIndex--) {
      newRow.push(arr2DArray[rowIndex][columnIndex]);
    }
    arrRotated2DArray.push(newRow);
  }
}

function turnLeft(arr2DArray, numRowCount, numColumnCount, arrRotated2DArray) {
  for (let columnIndex = 0; columnIndex < numColumnCount; columnIndex++) {
    const newRow = [];
    for (let rowIndex = 0; rowIndex < numRowCount; rowIndex++) {
      newRow.push(arr2DArray[rowIndex][columnIndex]);
    }
    arrRotated2DArray.push(newRow);
  }
}
