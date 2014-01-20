/**
 * Marked Extras
 * Copyright (c) 2014 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 */

'use strict';

// node_modules
var file     = require('fs-utils');
var hljs     = require('highlight.js');
var marked   = require('marked');
var renderer = new marked.Renderer();
var _        = require('lodash');

// Mix in the methods from underscore string
_.mixin(require('underscore.string'));

// Initialize custom language settings for highlight.js
hljs.registerLanguage('less', require('./lib/less.js'));


module.exports.init = function(options) {
  options = options || {};

  renderer.heading = function (text, level) {
    var fallbackTemplate = './lib/tmpl.js';
    var output, heading = options.heading;
    if (heading && _.isString(heading) && heading.length > 0) {
      output = file.readFileSync(options.heading);
    } else if (_.isFunction(heading)) {
      output = require(heading);
    } else {output = require(fallbackTemplate);}
    return _.template(output, {
      text: text,
      name: _.slugify(text),
      level: level
    });
  };
  exports.matchesExt = function (haystack, needles) {
    needles = Array.isArray(needles) ? needles : [needles];
    needles = (needles.length > 0) ? _.unique(_.flatten(needles)).join('|') : '.*';
    var re = new RegExp('(?:' + needles + ')', 'g');
    var matches = String(haystack).match(re);
    if (matches) {
      return true;
    } else {
      return false;
    }
  };

  exports.languages = {
    xml: ['html', 'xml'],
    less: ['less'],
    yaml: ['yfm', 'yml', 'yaml'],
    markdown: ['markdown', 'md'],
    handlebars: ['handlebars', 'hbs'],
    javascript: ['javascript', 'js', 'json']
  };

  exports.markedDefaults = {
    sanitize: false,
    highlight: function (code, lang) {
      if (lang === undefined) {lang = 'bash';}
      for (var language in exports.languages) {
        if (exports.languages.hasOwnProperty(language)) {
          if (exports.matchesExt(lang, exports.languages[language])) {
            lang = language;
          }
        }
      }
      return hljs.highlight(lang, code).value;
    },
    renderer: renderer
  };

  return exports;
};
