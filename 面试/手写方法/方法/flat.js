// https://juejin.cn/post/7038947397807915016
function flat(arr) {
  if (!Array.isArray(arr)) return;
  if (arr.length <= 1) {
    return arr;
  }
  const res = [];
  arr.forEach((item) => {
    if (item.length) {
      res.push(...flat(item));
    } else {
      res.push(item);
    }
  });
  return res;
}

