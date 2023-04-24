import { isPlayMovie } from "./isPlayMovie";

describe.each([
  { input: isPlayMovie(0), expected: false },
  { input: isPlayMovie(1), expected: true },
  { input: isPlayMovie(10), expected: true },
])("測試 isPlayMovie 輸入的值", ({ input, expected }) => {
  test(`returns ${expected}`, () => {
    expect(input).toBe(expected);
  });
});
