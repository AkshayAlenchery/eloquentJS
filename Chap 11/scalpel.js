async function locateScalpel (nest) {
  let current = nest.name
  while (true) {
    let next = await anyStorage(nest, current, 'scalpel')
    if (current === next) break
    current = next
  }
  return current
}
locateScalpel(bigOak)

function locateScalpel2 (nest) {
  function next (current) {
    return anyStorage(nest, current, 'scalpel').then(value =>
      (value === current) ? value : next(value)
    )
  }
  return next(nest.name)
}
locateScalpel(bigOak).then(console.log)
locateScalpel2(bigOak).then(console.log)
