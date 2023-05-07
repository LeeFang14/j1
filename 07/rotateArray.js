export function rotateArray(array) {
  const rowCount = array.length;
  const columnCount = array[0].length;
  const rotatedArray = [];
  for (let i = 0; i < columnCount; i++) {
    const newRow = [];
    for (let j = rowCount - 1; j >= 0; j--) {
      newRow.push(array[j][i]);
    }
    rotatedArray.push(newRow);
  }
  return rotatedArray;
}