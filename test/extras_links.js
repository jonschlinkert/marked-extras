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
 * links
 */


describe('links', function () {

  describe('autolinks', function () {
    it('should convert autolinks to a tags, wrapped in paragraph tags', function (done) {
      var fixture = '<http://example.com>';
      var actual = marked(fixture);
      var expected = '<p><a href="http://example.com">http://example.com</a></p>\n';
      expect(actual).to.deep.equal(expected);
      done();
    });

    it('should preserve newlines when converting mixed paragraph text and autolinks', function (done) {
      var fixture = [
        'hello world',
        '<http://example.com>'
      ].join('\n');
      var actual = marked(fixture);

      var expected = [
        '<p>hello world',
        '<a href="http://example.com">http://example.com</a></p>',
        ''
      ].join('\n');
      expect(actual).to.deep.equal(expected);
      done();
    });
  });

  describe('auto_links', function () {
    xit('should convert auto_links', function (done) {
      var testfile = 'auto_links';
      var fixture = helper.readFile(testfile + '.md');
      var actual = marked(fixture);

      helper.writeActual('extras', testfile, actual);
      var expected = helper.readFile(testfile + '.html');
      expect(actual).to.deep.equal(expected);
      done();
    });
  });

  describe('case_insensitive_refs', function () {
    xit('should convert case_insensitive_refs', function (done) {
      var testfile = 'links_case_insensitive_refs';
      var fixture = helper.readFile(testfile + '.md');
      var actual = marked(fixture);

      helper.writeActual('extras', testfile, actual);
      var expected = helper.readFile(testfile + '.html');
      expect(actual).to.deep.equal(expected);
      done();
    });
  });


  describe('double_link', function () {
    xit('should convert double_link', function (done) {
      var testfile = 'double_link';
      var fixture = helper.readFile(testfile + '.md');
      var actual = marked(fixture);

      helper.writeActual('extras', testfile, actual);
      var expected = helper.readFile(testfile + '.html');
      expect(actual).to.deep.equal(expected);
      done();
    });
  });


  describe('links_inline_style', function () {
    xit('should convert links_inline_style', function (done) {
      var testfile = 'links_inline_style';
      var fixture = helper.readFile(testfile + '.md');
      var actual = marked(fixture);

      helper.writeActual('extras', testfile, actual);
      var expected = helper.readFile(testfile + '.html');
      expect(actual).to.deep.equal(expected);
      done();
    });
  });

  describe('links_reference_style', function () {
    xit('should convert links_reference_style', function (done) {
      var testfile = 'links_reference_style';
      var fixture = helper.readFile(testfile + '.md');
      var actual = marked(fixture);

      helper.writeActual('extras', testfile, actual);
      var expected = helper.readFile(testfile + '.html');
      expect(actual).to.deep.equal(expected);
      done();
    });
  });

  describe('links_shortcut_references', function () {
    xit('should convert links_shortcut_references', function (done) {
      var testfile = 'links_shortcut_references';
      var fixture = helper.readFile(testfile + '.md');
      var actual = marked(fixture);

      helper.writeActual('extras', testfile, actual);
      var expected = helper.readFile(testfile + '.html');
      expect(actual).to.deep.equal(expected);
      done();
    });
  });


  describe('nested_square_link', function () {
    xit('should convert nested_square_link', function (done) {
      var testfile = 'nested_square_link';
      var fixture = helper.readFile(testfile + '.md');
      var actual = marked(fixture);

      helper.writeActual('extras', testfile, actual);
      var expected = helper.readFile(testfile + '.html');
      expect(actual).to.deep.equal(expected);
      done();
    });
  });

  describe('not_a_link', function () {
    xit('should convert not_a_link', function (done) {
      var testfile = 'not_a_link';
      var fixture = helper.readFile(testfile + '.md');
      var actual = marked(fixture);

      helper.writeActual('extras', testfile, actual);
      var expected = helper.readFile(testfile + '.html');
      expect(actual).to.deep.equal(expected);
      done();
    });
  });

  describe('literal_quotes_in_titles', function () {
    xit('should convert literal_quotes_in_titles', function (done) {
      var testfile = 'links_literal_quotes_in_titles';
      var fixture = helper.readFile(testfile + '.md');
      var actual = marked(fixture);

      helper.writeActual('extras', testfile, actual);
      var expected = helper.readFile(testfile + '.html');
      expect(actual).to.deep.equal(expected);
      done();
    });
  });

  describe('when a link reference is in parentheses', function () {
    xit('should convert ref_paren', function (done) {
      var testfile = 'links_ref_paren';
      var fixture = helper.readFile(testfile + '.md');
      var actual = marked(fixture);

      helper.writeActual('extras', testfile, actual);
      var expected = helper.readFile(testfile + '.html');
      expect(actual).to.deep.equal(expected);
      done();
    });
  });
});

