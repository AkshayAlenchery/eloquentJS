const url = 'https://eloquentjavascript.net/author'
const types = [
  'text/plain',
  'text/html',
  'application/json',
  'application/rainbows+unicorns'
]

async function request () {
  for (const type of types) {
    const resp = await fetch(url, { headers: { accept: type } })
    console.log(`${type}: ${await resp.text()}\n`)
  }
}

request()
