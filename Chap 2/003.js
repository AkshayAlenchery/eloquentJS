//! Chap 2: Chessboard Program

const chessboard = (size) => {
  const result = []
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i % 2 === 0) {
        if (j % 2 === 0) result.push(' ')
        else result.push('#')
      } else {
        if (j % 2 === 0) result.push('#')
        else result.push(' ')
      }
    }
    result.push('\n')
  }
  return result
}

console.log(chessboard(8).join(''))
