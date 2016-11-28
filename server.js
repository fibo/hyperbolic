const http = require('http')
const internalIp = require('internal-ip')
const opn = require('opn')

const onRequest = (req, res) => {
  res.end('it works')
}

const server = http.createServer(onRequest)

if (module === require.main) {
  server.listen(() => {
    const port = server.address().port
    const ip = internalIp()
    const uri = `http://${ip}:${port}`

    opn(uri)
    console.info(`🌎  point your browser to ${uri}`)
  })
}

module.exports = onRequest
