export function arraySum(array1, array2) {
  const result = [];
  array1.map((array1Element, array1index) => {
    array2.map((array2Element, array2index) => {
      if (array1index === array2index) {
        result.push(array1Element + array2Element);
      }
    });
  });
  return result;
}
