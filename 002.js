//! Chap 2: FizzBizz program

const fizzbizz = (i) => {
  if (i % 3 === 0 && i % 5 === 0) return 'FizzBizz'
  if (i % 3 === 0) return 'Fizz'
  if (i % 5 === 0) return 'Bizz'
  return i
}

for (let i = 1; i <= 100; i++) console.log(fizzbizz(i))
