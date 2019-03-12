const express = require('express')
const bodyParser = require('body-parser')
const enableWs = require('express-ws')

const expressApp = express()
enableWs(expressApp)
expressApp.use(bodyParser.json())
expressApp.use(express.static('public'))
// expressApp.ws('/stream', ws => {})
expressApp.listen(process.env.PORT, () => {
  console.log('listening')
})
