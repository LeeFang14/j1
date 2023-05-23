export function sumArray(array1, array2) {
  const result = array1.map((value, index) => {
    return value + array2[index];
  });
  return result;
}
