//! Deep Comparison

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true
  if (obj1 == null || typeof obj1 != 'object' || obj2 == null || typeof obj2 != 'object') return false
  let propCount1 = 0
  let propCount2 = 0
  for (const prop in obj1) propCount1++
  for (const prop in obj2) {
    propCount2++
    if (!(prop in obj1) || !deepEqual(obj1[prop], obj2[prop])) return false
  }
  return propCount1 === propCount2
}

const obj = { here: { is: 'an' }, object: 2 }
console.log(deepEqual(obj, obj))
// → true
console.log(deepEqual(obj, { here: { is: 'an' } }))
// → false
console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 }))
// → true
