function doHomework (subject, callback) {
  alert(`Starting my ${subject} homework.`)
  callback()
}

doHomework('math', () => alert('Finished my homework'))

function first () {
  setTimeout(() => console.log(1), 500)
}
function second () {
  console.log(2)
}
first()
second()
