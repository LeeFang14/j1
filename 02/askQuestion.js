import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import { isInteger } from "../modules/verify.js";
import { isModEqual } from "./isModEqual.js";

const rl = readline.createInterface({ input, output });

function askQuestion1() {
  rl.question("第一個數字: ", (input1) => {
    try {
      isInteger(input1);
      askQuestion2(input1);
    } catch (error) {
      console.log(`${error.message}，請重新輸入`);
      askQuestion1();
    }
  });
}

function askQuestion2(input1) {
  rl.question("第二個數字: ", (input2) => {
    try {
      isInteger(input2);
      rl.close();
      const num1 = Number(input1);
      const num2 = Number(input2);
      const result = isModEqual(num1, num2);
      console.log(result);
    } catch (error) {
      console.log(`${error.message}，請重新輸入`);
      askQuestion2(input1);
    }
  });
}

export { askQuestion1 };
