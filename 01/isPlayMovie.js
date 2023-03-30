function isPlayMovie(str) {
  const num = Number(str);
  return num !== 0 ? "照常播放電影" : "不播放電影";
}
export { isPlayMovie };
