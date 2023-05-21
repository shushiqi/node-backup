// 冒泡排序
// 时间复杂度：O(n^2)
// 空间复杂度：O(1)
// 稳定性：稳定
// 思路：
// 1.比较相邻的元素，如果前一个比后一个大，就交换他们两个；
// 2.每一趟排序，都会对未排序的元素进行一次排序；
// 3.每一趟排序，都会把最大的元素放到最后；
// 4.重复n-1趟排序，直到排序完成。
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let n = i; n < arr.length - 1; n++) {
            if (arr[n] > arr[n + 1]) {
                let temp = 0
                temp = arr[n]
                arr[n] = arr[n + 1]
                arr[n + 1] = temp
            }
        }
    }
    return arr
}
console.log(bubbleSort([1, 3, 6, 2, 4, 5]));
