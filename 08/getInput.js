import { isPositiveInteger } from "../modules/verify.js";
import { rl } from "./askQuestion.js";
import { main } from "./main.js";

export function getInput(input, printResult) {
  try {
    isPositiveInteger(input);
    const verified = Number(input);
    printResult(verified);
    rl.close();
  } catch (error) {
    console.log(`${error.message}，請重新輸入`);
    main();
  }
}
