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
 * paragraphs
 */

describe('paragraphs', function () {

  describe('when a simple string is passed', function () {
    it('it should be wrapped in paragraph tags, ending with a newline', function (done) {
      var actual = marked('foo');
      expect(actual).to.deep.equal('<p>foo</p>\n');
      done();
    });
  });
});