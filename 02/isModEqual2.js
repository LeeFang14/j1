function isModEqualArray(arr) {
  let mod = 3;
  const [num1, num2] = arr;
  return num1 % mod === num2 % mod ? "餘數相同" : "餘數不同";
}

export { isModEqualArray };
