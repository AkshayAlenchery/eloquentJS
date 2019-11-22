//! Chap 3: Counting characters

const countChar = (string, char) => {
  let len = string.length
  let count = 0
  while (len > 0) {
    if (string[len - 1] === char) count++
    len--
  }
  return count
}

// const countBs = (string) => {
//   let len = string.length
//   let count = 0
//   while (len > 0) {
//     if (string[len - 1] === 'B') count++
//     len--
//   }
//   return count
// }

const countBs = (string) => {
  return countChar(string, 'B')
}

console.log(countChar('BBCbbbbBBB', 'b'))