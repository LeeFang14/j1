import { isPositiveInteger } from "../utility/verify.js";

export function Q3(strInput) {
  isPositiveInteger(strInput);
  const numInput = Number(strInput);
  let ticketPrice = "";
  if (numInput <= 6 || numInput >= 65) {
    ticketPrice = "票價: 200 元(半價)";
  } else {
    ticketPrice = "票價: 400 元(原價)";
  }
  return ticketPrice;
}
