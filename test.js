function lenOfLongStr(s) {
  let map = {};

  let value = s.split("").reduce((max, v, i) => {
    let left = map[v] >= left ? map[v] + 1 : left;
    map[v] = i;
    return Math.max(max, i - left + 1);
  }, 0);

  return value;
}
