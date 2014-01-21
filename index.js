/**
 * Marked Extras
 * Copyright (c) 2014 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 */

'use strict';

// node_modules
var file         = require('fs-utils');
var hljs         = require('highlight.js');
var marked       = require('marked');
var renderer     = new marked.Renderer();
var _            = require('lodash');

// Mix in the methods from underscore string
_.mixin(require('underscore.string'));

// Local libs
var LANGUAGE_MAP = require('./lib/lang.js');

module.exports.init = function(options) {
  var languages = _.extend(LANGUAGE_MAP, options.languages);

  renderer.heading = function (text, level) {
    var tmpl = require('./lib/tmpl.js');
    if(options.heading && options.heading.length > 0) {

      // Override the default heading template
      tmpl = file.readFileSync(options.heading);
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
  exports.markedDefaults = _.extend(defaults, options);

  return exports;
};