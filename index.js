/**
 * marked-extras <https://github.com/jonschlinkert/marked-extras>
 *
 * Copyright (c) 2014 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 */

const fs = require('fs');
const path = require('path');
const hljs = require('highlight.js');
const marked = require('marked');
const renderer = new marked.Renderer();
const _ = require('lodash');

const LANGUAGE_MAP = require('./lib/lang.js');

// Mix in the methods from underscore string
_.mixin(require('underscore.string'));


module.exports.init = function(options) {
  options = options || {};
  var languages = _.extend({}, LANGUAGE_MAP, options.languages);

  /**
   * marked.js renderer
   */
  renderer.heading = function (text, level) {
    var tmpl = require('./lib/tmpl.js');
    if(options.heading && options.heading.length > 0) {

      // If defined in options, override the default heading template
      tmpl = fs.readFileSync(path.resolve(options.heading), 'utf8');
    }

    return _.template(tmpl, {
      text: text,
      level: level,
      name: _.slugify(text)
    });
  };

  hljs.configure({
    tabReplace: options.tabReplace || ' ',
    classPrefix: options.prefix || 'language-'
  });

  // Initialize custom language settings for highlight.js
  hljs.registerLanguage('less', require('./lib/less.js'));
  hljs.registerLanguage('handlebars', require('./lib/handlebars.js'));

  var defaults = {
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,

    highlight: function (code, lang) {
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

  exports.markedDefaults = _.extend({}, defaults, options);
  return exports;
};