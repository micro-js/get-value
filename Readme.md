
# get-value

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Retrieve the value of a form field

## Installation

    $ npm install @f/get-value

## Usage

It gets the value of a form field and normalizes it a bit:

  * Checkboxes/Radio-buttons return `true` if they are checked and don't have an explicit value set, and the value if they do. They return `false` if they are unchecked.
  * Select will return the value of the option that is selected.
  * ...Everything else just returns `el.value`.

```js
var controls = require('@f/form-controls')
var getValue = require('@f/get-value')
var brackets = require('@f/brackets')
var reduce = require('@f/reduce')

function serialize (form) {
  return reduce(function (acc, ctrl) {
    return brackets(acc, ctrl.name, getValue(ctrl))
  }, {}, controls(form))
}
```

## API

### getValue(element)

- `element` - The element who's value you want to get

**Returns:** The value of the element, normalized according to the rules listed above.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/get-value.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/get-value
[git-image]: https://img.shields.io/github/tag/micro-js/get-value.svg
[git-url]: https://github.com/micro-js/get-value
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/get-value.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/get-value
