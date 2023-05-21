// 插入排序
// 时间复杂度：O(n^2)
// 空间复杂度：O(1)
// 稳定性：不稳定
// 思路：

function insertSort(arr) {
  for (let index = 1; index < arr.length; index++) {
    let temp = arr[index];
    for (let i = index - 1; i >= 0; i--) {
      if (arr[i] > temp) {
        arr[i + 1] = arr[i];
      } else {
        arr[i + 1] = temp;
        break;
      }
    }
  }
  return arr;
}
