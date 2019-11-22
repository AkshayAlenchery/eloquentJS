//! Reversing an array

const reverseArray = arr => {
  const revArr = []
  while (arr.length) revArr.push(arr.pop())
  return revArr
}

const reverseArrayInPlace = arr => {
  let start = 0
  let end = arr.length - 1
  while (start < end) {
    const temp = arr[start]
    arr[start++] = arr[end]
    arr[end--] = temp
  }
}

const arr = [1, 2, 3, 4, 5]
// console.log(reverseArray(arr))

reverseArrayInPlace(arr)
console.log(arr)
