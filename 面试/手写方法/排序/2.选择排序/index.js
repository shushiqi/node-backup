// 选择排序
// 时间复杂度：O(n^2)
// 空间复杂度：O(1)
// 稳定性：不稳定
// 思路：
// 1.在未排序序列中找到最小（大）元素，存放到排序序列的起始位置；
// 2.再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
// 3.重复第二步，直到所有元素均排序完毕。
function selectionSort(arr) {
    console.time("start:");
    for (let n = arr.length - 1; n > 0; n--) {
        let max = arr[0]
        let index = 0
        for (let i = 1; i <= n; i++) {
            if (max < arr[i]) {
                max = arr[i]
                index = i
            }
        }
        let temp = arr[n]
        arr[n] = max
        arr[index] = temp
    }
    console.timeEnd('start:');
    return arr
}

console.log(selectionSort([1, 3, 6, 2, 4, 5]));
