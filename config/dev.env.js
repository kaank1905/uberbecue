var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  //export of module component
  NODE_ENV: '"development"'
})
