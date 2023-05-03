import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
export const rl = readline.createInterface({ input, output });

export function askQuestion(query) {
  return new Promise((resolve) => {
    rl.question(query, (input) => {
      resolve(input);
    });
  });
}
