function isModEqual(num1, num2) {
  num1 = num1 % 3;
  num2 = num2 % 3;
  return num1 === num2 ? "餘數相同" : "餘數不同";
}

export { isModEqual };
