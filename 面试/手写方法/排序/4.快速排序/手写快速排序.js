function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let temp = arr[0]
    let left = [],
        right = []
    for (let index = 1; index < arr.length; index++) {
        const element = arr[index];
        if (element > temp) {
            right.push(element)
        } else {
            left.push(element)
        }
    }
    return quickSort(left).concat(temp, quickSort(right))
}
console.log(quickSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]));