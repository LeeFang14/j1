export function Q7(strOriginPattern, rotateDirection, rotateTimes) {
  if (["right", "left"].every((dir) => rotateDirection !== dir)) {
    console.log(`沒有 "${rotateDirection}" 這個選項，無法旋轉。`);
    return;
  } else {
    const arr2dOriginPattern = parseStrTo2DArr(strOriginPattern);
    const arrRotated2DArray = rotate2DArray(
      arr2dOriginPattern,
      rotateDirection,
      rotateTimes
    );
    const strNewPattern = parseArrToStr(arrRotated2DArray);
    const baseAngle = 90;
    const rotateAngle = baseAngle * rotateTimes;
    return `turn ${rotateDirection} ${rotateAngle}° :
${strNewPattern}`;
  }
}

function parseStrTo2DArr(str) {
  const arrRow = str.split("\n");
  return arrRow.map((row, index, array) => {
    const maxLengthRow = Math.max(...array.map((row) => row.length));
    const r = row.padEnd(maxLengthRow, " ");
    r.split("");
    return r;
  });
}

function rotate2DArray(originPattern, direction, rotateTimes) {
  for (let currentRotate = 0; currentRotate < rotateTimes; currentRotate++) {
    originPattern = rotateArray(originPattern, direction);
  }
  return originPattern;
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

// 這邊要把兩個寫在一起，turnRight、turnLeft第二層迴圈
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
