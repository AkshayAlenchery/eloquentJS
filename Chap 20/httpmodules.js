// const { createServer } = require('http')
// let server = createServer((request, response) => {
//   response.writeHead(200, { 'Content-Type': 'text/html' })
//   response.write(`
//     <h1>Hello!</h1>
//     <p>You asked for <code>${request.url}</code></p>`)
//   response.end()
// })
// server.listen(8000)
// console.log('Listening! (port 8000)')

// const { request } = require('http')
// let requestStream = request(
//   {
//     hostname: 'eloquentjavascript.net',
//     path: '/20_node.html',
//     method: 'GET',
//     headers: { Accept: 'text/html' }
//   },
//   response => {
//     console.log('Server responded with status code', response.statusCode)
//   }
// )
// requestStream.end()
const { createServer } = require('http')
createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  request.on('data', chunk => response.write(chunk.toString().toUpperCase()))
  request.on('end', () => response.end())
}).listen(8000)

const {request} = require("http");
request({
  hostname: "localhost",
  port: 8000,
  method: "POST"
}, response => {
  response.on("data", chunk =>
    process.stdout.write(chunk.toString()));
}).end("Hello server");
// → HELLO SERVER