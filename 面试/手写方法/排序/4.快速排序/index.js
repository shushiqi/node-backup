// 快速排序
// 时间复杂度：O(nlogn)
// 空间复杂度：O(logn)
// 稳定性：不稳定
// 思路：
//  选择数组中某个数作为基数，
//  通过一趟排序将要排序的数据分割成独立的两部分，
//  其中一部分的所有数都比基数小， 另外一部分的所有数都都比基数大
//  然后再按此方法对这两部分数据分别进行快速排序， 循环递归，
//  最终使整个数组变成有序

function quickSort(arr) {
  if (arr.length > 1) {
    let mid = arr[0];
    let left = [],
      right = [];

    for (let index = 1; index < arr.length; index++) {
      if (arr[index] < mid) {
        left.push(arr[index]);
      } else {
        right.push(arr[index]);
      }
    }
    return [...quickSort(left), mid, ...quickSort(right)];
  } else {
    return arr;
  }
}
