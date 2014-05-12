/**
 * marked-extras <https://github.com/jonschlinkert/marked-extras>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

const path = require('path');
const expect = require('chai').expect;
const file = require('fs-utils');
const marked = require('../');
const helper = require('./helpers/utils');


/**
 * headings
 */


describe('headings', function () {
  xit('should convert headings', function (done) {
    var markdown = '# Heading\n\nText';
    var html =     '<h1>Heading</h1>\n\n<p>Text</p>';

    var actual = marked(markdown);
    expect(actual).to.deep.equal(html);
    done();
  });

  it('should convert headings', function (done) {
    var markdown = '# Heading\n\nText';
    var html = [
      '<h1>',
      '  <a name="heading" class="anchor" href="#heading">',
      '    <span class="header-link"></span>',
      '  </a>Heading',
      '</h1><p>Text</p>\n'
    ].join('\n');

    var actual = marked(markdown);
    expect(actual).to.deep.equal(html);
    done();
  });
});
