const express = require('express')
const bodyParser = require('body-parser')
const enableWs = require('express-ws')
const mustacheExpress = require('mustache-express');

// setup express
const expressApp = express()
expressApp.use(bodyParser.json())

// setup mustache
expressApp.engine('html', mustacheExpress());
expressApp.set('view engine', 'mustache');
expressApp.use(express.static('public'))

// setup ws
enableWs(expressApp)
/* expressApp.ws('/stream', ws => {}) */

// listen
expressApp.listen(process.env.PORT, () => {
  console.log('listening')
})
