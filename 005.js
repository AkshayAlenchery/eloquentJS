//! Chap 3: Check even or not

const isEven = (value) => {
  if (value < 0) return null
  if (value === 0) return true
  if (value === 1) return false
  return isEven(value - 2)
}

console.log(isEven(75))
