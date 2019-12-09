// This is the old skipSpace. Modify it...
function skipSpace(string) {
  let first = string.match(/^(\s|#.*)*/);
  return string.slice(first[0].length);
}

console.log(parse("# hello\nx"));
// → {type: "word", name: "x"}

console.log(parse("a # one\n   # two\n()"));
// → {type: "apply",
//    operator: {type: "word", name: "a"},
//    args: []}