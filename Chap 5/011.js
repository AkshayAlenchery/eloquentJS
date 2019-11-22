//! Combining arrays

const flatten = arr => arr.reduce((x, y) => x.concat(y))

console.log(
  flatten([
    [1, 2, 3],
    [5, 6],
    [10, 100]
  ])
)
