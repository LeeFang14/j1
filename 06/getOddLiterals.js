function getOddLiterals(str) {
  let OddLiteral = [];
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      OddLiteral.push(str[i]);
    }
  }
  return OddLiteral.join(",");
}

export { getOddLiterals };
