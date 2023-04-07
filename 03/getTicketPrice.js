function getTicketPrice(num) {
  return num > 6 && num < 65 ? "票價: 400 元(原價)" : "票價: 200 元(半價)";
}

export { getTicketPrice };
