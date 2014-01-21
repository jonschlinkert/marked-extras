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
module.exports = function (str, options) {
  options = options || {};

  // Initialize marked extras
  extras.init(options);

  // Set marked.js options
  marked.setOptions(extras.markedDefaults);

  // do stuff...
  // ...

  // Convert markdown to HTML
  return marked(str);
};
```

### Highlighting

Also be sure to add the [highlight.js](http://highlightjs.org/usage/) scripts to your HTML:

```html
<script src="js/highlight.js"></script>
<!-- or, a customized version -->
<script src="js/highlight.pack.js"></script>

<script>hljs.initHighlightingOnLoad();</script>
```

## Options

The following example shows the actual defaults used in this lib, and how they can be customized:

```js
var opts = {
  renderer: renderer,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,

  // highlight.js options
  prefix: 'lang-',
  tabReplace: ' ',
  highlight: function (code, lang) {
    console.log(languages[lang]);
    try {
      if (languages[lang]) {
        lang = languages[lang];
      } else {
        return code;
      }
      return hljs.highlight(lang, code).value;
    } catch(e) {
      return hljs.highlightAuto(code).value;
    }
  }
};

var markedOpts = _.extend(extras.markedDefaults, opts);

// Define marked.js options
marked.setOptions(markedOpts);
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