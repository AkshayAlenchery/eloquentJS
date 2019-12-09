specialForms.set = (args, scope) => {
  // Your code here.
  if (args.length !== 2 || args[0].type !== 'word') { throw new SyntaxError('wrong use of set') }
  const variable = args[0].name
  const value = evaluate(args[1], scope)
  for (let env = scope; env; env = Object.getPrototypeOf(env)) {
    if (Object.prototype.hasOwnProperty.call(env, variable)) {
      env[variable] = value
      return value
    }
  }
  throw new ReferenceError(`undefined variable ${variable}`)
}

run(`
  do(define(x, 4),
     define(setx, fun(val, set(x, val))),
     setx(50),
     print(x))
  `)
// → 50
run(`set(quux, true)`)
// → Some kind of ReferenceError
