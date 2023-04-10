function getOddLetter(str) {
  let OddLetter = [];
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      OddLetter.push(str[i]);
    }
  }
  return OddLetter.join(",");
}

export { getOddLetter };
