/**
 * marked-extras <https://github.com/jonschlinkert/marked-extras>
 *
 * Copyright (c) 2014 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 */

const path = require('path');
const hljs = require('highlight.js');
const marked = require('marked');
const _ = require('lodash');


const LANGUAGE_MAP = require('./lib/lang.js');
const slugify = require('./lib/slugify');

module.exports = function(str, options) {
  var renderer = new marked.Renderer();

  options = options || {};
  var opts = {};

  // Base marked.js Options
  _.extend(opts, {
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
  }, options);


  // Allow custom heading templates to be passed
  renderer.heading = function (text, level) {
    var tmpl = require('./lib/anchor.js');
    if(opts.heading && typeof opts.heading === 'function') {
      tmpl = opts.heading;
    }
    return tmpl(text, level, slugify(text));
  };
  _.extend(opts, { renderer: renderer });


  // highlight.js Options
  var languages = _.extend({}, LANGUAGE_MAP, opts.languages || {});
  hljs.configure({
    tabReplace: opts.tabReplace || ' ',
    classPrefix: opts.prefix || 'language-'
  });

  // Initialize custom language settings for highlight.js
  hljs.registerLanguage('less', require('./lib/less.js'));

  // Defined highlight options in marked.js
  _.extend(opts, {
    highlight: function (code, lang) {
      try {
        if (languages[lang]) {
          lang = languages[lang];
        }
        return hljs.highlight(lang, code).value;
      } catch (e) {
        return hljs.highlightAuto(code).value;
      }
    }
  });

  marked.setOptions(opts);
  return marked(str,  _.extend(opts, options));
};