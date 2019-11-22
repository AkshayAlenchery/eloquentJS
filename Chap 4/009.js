//! Convert array to list and viceversa

const arrayToList = arr => {
  if (arr.length === 0) return null
  let start = null
  let curr = null
  for (const val of arr) {
    const obj = { value: val, rest: null }
    if (start === null) start = obj
    if (curr !== null) curr.rest = obj
    curr = obj
  }
  return start
}

const listToArray = list => {
  const arr = []
  if (list === null) return null
  while (list) {
    arr.push(list.value)
    list = list.rest
  }
  return arr
}

console.log(listToArray(arrayToList([1, 2, 3])))
