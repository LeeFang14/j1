function isModEqual(num1, num2, mod = 3) {
  return num1 % mod === num2 % mod ? "餘數相同" : "餘數不同";
}

export { isModEqual };
