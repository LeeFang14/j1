export function sumArray(array1, array2) {
  const result = [];
  array1.map((array1Value, array1Index) => {
    const array2Value = array2[array1Index];
    result.push(array1Value + array2Value);
  });
  return result;
}

/* 之後想進一步處理如果兩陣列不一樣長的話，因為還沒寫完。所以先註解掉...
function sumArray2(array1, array2) {
  const result = [];
  if (array1.length > array2.length) {
    array1.map((array1Value, array1Index) => {
      const array2Value = array2[array1Index];
      if (array2Value === undefined) {
        result.push(array1Value);
      }
      result.push(array1Value + array2Value);
    });
  } else {
    array2.map((array2Value, array2Index) => {
      const array1Value = array1[array2Index];
      if (array1Value === undefined) {
        result.push(array2Value);
      }
      result.push(array1Value + array2Value);
    });
  }

  return result;
}

const oneBiggerThenTwo = sumArray2([2, 3, 1, 7, 9, 1], [8, 7, 9, 3, 1]);
console.log("1>2: ", oneBiggerThenTwo);
const oneSmallerThenTwo = sumArray2([2, 3, 1, 7, 9], [8, 7, 9, 3, 1, 2]);
console.log("1<2: ", oneSmallerThenTwo);
*/
