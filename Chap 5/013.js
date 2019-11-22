//! Perform action on every element

const every = (array, test) => {
  for (const items of array) {
    if (test(items) === false) return false
  }
  return true
}

console.log(every([1, 3, 5], n => n < 10))
// → true
console.log(every([2, 4, 16], n => n < 10))
// → false
console.log(every([], n => n < 10))
// → true
