//! My own loop

const myLoop = (val, update, cond, disp) => {
  while (cond(val)) {
    disp(val)
    val = update(val)
  }
}

console.log(
  myLoop(
    10,
    n => n - 1,
    n => n > 0,
    console.log
  )
)
