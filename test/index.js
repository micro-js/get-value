/**
 * Imports
 */

var getValue = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.equal(getValue($('<input type="text" value="test" />')), 'test')
  t.equal(getValue($('<select><option value="red" /><option value="green" selected  /></select>')), 'green')
  t.equal(getValue($('<input type="checkbox" />')), false)
  t.equal(getValue($('<input type="checkbox" checked />')), true)
  t.equal(getValue($('<input type="checkbox" checked value="micro" />')), 'micro')
  t.equal(getValue($('<input type="checkbox" value="micro" />')), false)

  t.end()
})

/**
 * Helpers
 */

function $ (str) {
  document.body.innerHTML = ''
  document.body.innerHTML = str
  return document.body.firstChild
}
