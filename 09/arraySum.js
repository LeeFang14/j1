export function arraySum(array1, array2) {
  const result = [];
  array1.map((array1Value, array1Index) => {
    array2.map((array2Value, array2Index) => {
      if (array1Index === array2Index) {
        result.push(array1Value + array2Value);
      }
    });
  });
  return result;
}
