function getTicketPrice(num) {
  return num > 6 && num < 65 ? "票價: 400元(全票)" : "票價: 200元(半票)";
}

export { getTicketPrice };
