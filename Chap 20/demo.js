const { createServer } = require('http')

const methods = Object.create(null)

createServer((request, response) => {
  let handler = methods[request.method] || notAllowed
  handler(request)
    .catch(error => {
      if (error.status != null) return error
      return { body: String(error), status: 500 }
    })
    .then(({ body, status = 200, type = 'text/plain' }) => {
      response.writeHead(status, { 'Content-Type': type })
      if (body && body.pipe) body.pipe(response)
      else response.end(body)
    })
}).listen(8000)

async function notAllowed (request) {
  return {
    status: 405,
    body: `Method ${request.method} not allowed.`
  }
} /*  */
const { parse } = require('url')
const { resolve, sep } = require('path')

const baseDirectory = process.cwd()

function urlPath (url) {
  let { pathname } = parse(url)
  console.log(pathname)
  console.log(resolve(decodeURIComponent(pathname)))
  let path = resolve(decodeURIComponent(pathname).slice(1))
  if (path != baseDirectory && !path.startsWith(baseDirectory + sep)) {
    throw { status: 403, body: 'Forbidden' }
  }
  return path
}
