//! Chap 2: Printing starts

const stars = (n) => {
  const result = []
  for (let i = 0; i < 7; i++) {
    result.push('#')
    console.log(result.join(''))
  }
}

stars(5)