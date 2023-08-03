export function Q7(strPattern, rotateDirection, rotateTimes) {
  const arr2dPattern = parseStrTo2DArr(strPattern);
  const arrRotated2dPattern = rotate2dPattern(
    arr2dPattern,
    rotateDirection,
    rotateTimes
  );
  const strNewPattern = parseArrToStr(arrRotated2dPattern);
  return `向${rotateDirection}轉${rotateTimes}次 :
${strNewPattern}`;
}

function parseStrTo2DArr(str) {
  const arrRow = str.split("\n");
  return arrRow.map((row, _, array) => {
    const maxLengthRow = Math.max(...array.map((row) => row.length));
    const r = row.padEnd(maxLengthRow, " ");
    return r.split("");
  });
}

// 根據旋轉次數和方向遞迴旋轉二維陣列
function rotate2dPattern(pattern, direction, rotateTimes) {
  if (rotateTimes === 0) {
    return pattern;
  } else {
    pattern = performRotation(pattern, direction);
    return rotate2dPattern(pattern, direction, rotateTimes - 1);
  }
}

// 根據方向旋轉pattern
function performRotation(originPattern, direction) {
  const numRowCount = originPattern.length;
  const numColumnCount = originPattern[0].length;
  const newPattern = [];
  for (let columnIndex = 0; columnIndex < numColumnCount; columnIndex++) {
    const newRow = [];
    for (let rowIndex = 0; rowIndex < numRowCount; rowIndex++) {
      let rotatedRowIndex, rotatedColumnIndex;
      if (direction === "right") {
        rotatedRowIndex = numRowCount - 1 - rowIndex;
        rotatedColumnIndex = columnIndex;
      } else if (direction === "left") {
        rotatedRowIndex = rowIndex;
        rotatedColumnIndex = numColumnCount - 1 - columnIndex;
      }
      newRow.push(originPattern[rotatedRowIndex][rotatedColumnIndex]);
    }
    newPattern.push(newRow);
  }
  return newPattern;
}

function parseArrToStr(arr) {
  return arr
    .map((arrColumn) => {
      let strColumn = [];
      strColumn = arrColumn.join("");
      return strColumn;
    })
    .join("\n");
}
