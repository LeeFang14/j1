// 遍歷陣列，並計算每str裡每個字母出現的次數，存成obj
function countLetter(str) {
  const charCounts = {};
  for (const value of str) {
    charCounts[value] = charCounts[value] ? charCounts[value] + 1 : 1;
  }
  return charCounts;
}

// 將obj裡value=1的key存到陣列裡。
function getSingleLetterArray(obj) {
  const singleLetterArray = [];
  for (const key in obj) {
    if (obj[key] === 1) {
      singleLetterArray.push(key);
    }
  }
  return singleLetterArray;
}

// 排除都沒有重複的的情形(空陣列)
function isArray(arr) {
  if (arr.length === 0) {
    return;
  } else {
    return arr.join(",");
  }
}

// 空[]
function printSingleLetter(str) {
  return str === undefined ? "沒有單數個字母" : str;
}

export { countLetter, printSingleLetter };
// const result = countLetter("banana");
// console.log("result: ", result);
