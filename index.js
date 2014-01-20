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

  // See ./lib/tmpl.js
  renderer.heading = function (text, level) {
    var output;
    if(options.heading && options.heading.length > 0) {
      output = file.readFileSync(options.heading);
      // Use fallback heading template when one isn't defined in options
    } else {output = require('./lib/tmpl.js');}
    return _.template(output, {text: text, level: level});
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
      return '<div class="code-example">' + hljs.highlight(lang, code).value + '</div>';
    },
    renderer: renderer
  };

  return exports;
};
