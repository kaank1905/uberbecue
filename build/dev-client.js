/* eslint-disable */
require('eventsource-polyfill')
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

hotClient.subscribe(function (event) {  // eventtrigger for subcribe from client
  if (event.action === 'reload') { // if construct when event performs action
    window.location.reload() // reload of the actual window
  }
})
