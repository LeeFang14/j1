export function rotateArray(array) {
  const rowCount = array.length;
  const columnCount = array[0].length;
  const rotatedArray = [];
  for (let j = 0; j < columnCount; j++) {
    const newRow = [];
    for (let i = rowCount - 1; i >= 0; i--) {
      newRow.push(array[i][j]);
    }
    rotatedArray.push(newRow);
  }
  return rotatedArray;
}
