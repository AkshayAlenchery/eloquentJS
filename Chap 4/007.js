//! Sum of range of numbers

const range = (start, end, steps = 1) => {
  const nums = []
  if (steps === 1) for (let i = start; i <= end; i += 1) nums.push(i)
  else for (let i = start; i >= end; i -= 1) nums.push(i)
  return nums
}

const sum = nums => {
  let total = 0
  for (const num of nums) total += num
  return total
}

console.log(range(1, 10))
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1))
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)))
// → 55
