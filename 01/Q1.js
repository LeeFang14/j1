import { isPositiveInteger } from "../utility/verify.js";

export function Q1(strInput) {
  isPositiveInteger(strInput);
  const numInput = Number(strInput);
  let message = "";
  if (!numInput) {
    message = "不播放電影";
  } else {
    message = "照常播放電影";
  }
  return message;
}
