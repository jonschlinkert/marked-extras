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

module.exports.init = function(options) {

  var languages = exports.languages = {
    coffee    : 'coffeescript',
    handlebars: 'handlebars',
    hbs       : 'handlebars',
    html      : 'xml',
    xml       : 'xml',
    javascript: 'javascript',
    js        : 'javascript',
    json      : 'javascript',
    less      : 'less',
    markdown  : 'markdown',
    md        : 'markdown',
    pl        : 'perl',
    rb        : 'ruby',
    ru        : 'ruby',
    yaml      : 'yaml',
    yfm       : 'yaml',
    yml       : 'yaml',
  };

  // See ./lib/tmpl.js
  renderer.heading = function (text, level) {
    var output;
    if(options.heading && options.heading.length > 0) {
      output = file.readFileSync(options.heading);
      // Use fallback heading template when one isn't defined in options
    } else {output = require('./lib/tmpl.js');}
    return _.template(output, {text: text, level: level});
  };

  hljs.configure({
    tabReplace: ' ',
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
      if (lang === undefined) {lang = 'bash';}
      Object.keys(languages).forEach(function (language) {
        lang = languages[language];
      });
      try {
        return hljs.highlight(lang, code).value;
      } catch (e){
        return hljs.highlightAuto(code).value;
      }
    }
  };

  exports.markedDefaults = _.extend(defaults, options);

  return exports;
};