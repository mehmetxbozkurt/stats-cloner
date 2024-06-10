var Stat = require('fs').Stats

module.exports = statsCloner

function statsCloner(stats) {
  var replacement = new Stat

  Object.keys(stats).forEach(function(key) {
    replacement[key] = stats[key]
  })

  return replacement
}