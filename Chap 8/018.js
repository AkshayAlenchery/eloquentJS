class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply (num1, num2) {
  if (Math.random() <= 0.2) {
    return num1 * num2
  }
  throw new MultiplicatorUnitFailure('Failed, Try again')
}
function multiply (num1, num2) {
  for (;;) {
    try {
      return primitiveMultiply(num1, num2)
    } catch (error) {
      if (!(error instanceof MultiplicatorUnitFailure)) console.log(error)
    }
  }
}
console.log(multiply(3, 4))
