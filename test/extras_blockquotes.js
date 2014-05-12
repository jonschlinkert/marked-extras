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
 * Blockquotes
 */

describe('blockquotes:', function () {

  describe('when an angle bracket is the first thing on a line', function () {
    it('should convert to a blockquote', function (done) {
      var fixture = '> This is a blockquote';
      var actual = marked(fixture);

      var expected = '<blockquote>\n<p>This is a blockquote</p>\n</blockquote>\n';
      expect(actual).to.deep.equal(expected);
      done();
    });
  });

  describe('blockquote_list_item', function () {
    xit('should convert blockquote_list_item', function (done) {
      var testfile = 'blockquote_list_item';
      var fixture = helper.readFile(testfile + '.md');
      var actual = marked(fixture);

      helper.writeActual('extras', testfile, actual);
      var expected = helper.readFile(testfile + '.html');
      expect(actual).to.deep.equal(expected);
      done();
    });
  });

  describe('blockquotes_with_code_blocks', function () {
    xit('should convert blockquotes_with_code_blocks', function (done) {
      var testfile = 'blockquotes_with_code_blocks';
      var fixture = helper.readFile(testfile + '.md');
      var actual = marked(fixture);

      helper.writeActual('extras', testfile, actual);
      var expected = helper.readFile(testfile + '.html');
      expect(actual).to.deep.equal(expected);
      done();
    });
  });

  describe('lazy_blockquotes', function () {
    xit('should convert lazy_blockquotes', function (done) {
      var testfile = 'lazy_blockquotes';
      var fixture = helper.readFile(testfile + '.md');
      var actual = marked(fixture);

      helper.writeActual('extras', testfile, actual);
      var expected = helper.readFile(testfile + '.html');
      expect(actual).to.deep.equal(expected);
      done();
    });
  });

  describe('nested_blockquotes', function () {
    xit('should convert nested_blockquotes', function (done) {
      var testfile = 'nested_blockquotes';
      var fixture = helper.readFile(testfile + '.md');
      var actual = marked(fixture);

      helper.writeActual('extras', testfile, actual);
      var expected = helper.readFile(testfile + '.html');
      expect(actual).to.deep.equal(expected);
      done();
    });
  });


  describe('blockquotes_embedded_lists', function () {
    xit('should convert blockquotes_embedded_lists', function (done) {
      var testfile = 'blockquotes_embedded_lists';
      var fixture = helper.readFile(testfile + '.md');
      var actual = marked(fixture);

      helper.writeActual('extras', testfile, actual);
      var expected = helper.readFile(testfile + '.html');
      expect(actual).to.deep.equal(expected);
      done();
    });
  });
});