import { isPlayMovie } from "./isPlayMovie";

describe("測試 isPlayMovie 輸入的值", function () {
  test("輸入0 要等於：不播放電影", function () {
    expect(isPlayMovie(0)).toBe("不播放電影");
  });
  test("輸入1 要等於：照常播放電影", function () {
    expect(isPlayMovie(1)).toBe("照常播放電影");
  });
  test("輸入100 要等於：照常播放電影", function () {
    expect(isPlayMovie(100)).toBe("照常播放電影");
  });
});
