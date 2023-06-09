export function twofold(bacteria, minute) {
  if (minute < 20) {
    return bacteria;
  }
  bacteria = bacteria * 2;
  return twofold(bacteria, minute - 20);
}
