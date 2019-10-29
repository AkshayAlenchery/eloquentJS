//! Chap 2: FizzBizz program

const fizzbizz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log('FizzBizz')
    if (i % 3 === 0) console.log('Fizz')
    else if (i % 5 === 0) console.log('Bizz')
    else console.log(i)
  }
}

fizzbizz()