const express = require('express')
const next = require('next')
const { parse } = require('url')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const port = process.env.PORT || 3000

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('/test', (req, res) => app.render(req, res, '/'))

    server.get('*', (req, res) => {
      const parsedUrl = parse(req.url, true)
      handle(req, res, parsedUrl)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log('> Ready on port', port)
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
