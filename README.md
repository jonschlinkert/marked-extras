# marked-extras [![NPM version](https://badge.fury.io/js/marked-extras.png)](http://badge.fury.io/js/marked-extras)

> Extras, utils, language definitions and defaults for marked.js

If you find a bug or have a feature request, [please create an issue](https://github.com/helpers/marked-extras/issues).

## Installation
Use [npm](npmjs.org) to install the package

```
npm i marked-extras --save
```

## Usage

```js
var marked = require('marked');
var extras = require('marked-extras');

// Example node module
module.exports = function (content, options) {
  options = options || {};

  // Initialize marked extras
  extras.init(options);

  // Set marked.js options
  marked.setOptions(extras.markedDefaults);

  // do something...
  return marked(content);
};

```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.

## Authors

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

**Brian Woodward**

+ [github/doowb](https://github.com/doowb)
+ [twitter/doowb](http://twitter.com/jonschlinkert)


## License
Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors.
Released under the MIT license