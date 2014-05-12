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
 * inline HTML
 */

describe('inline_html_advanced', function () {
  it('should convert inline_html_advanced', function (done) {
    var testfile = 'inline_html_advanced';
    var fixture = helper.readFile(testfile + '.md');
    var actual = marked(fixture);

    helper.writeActual('extras', testfile, actual);
    var expected = helper.readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('inline_html_comments', function () {
  it('should convert inline_html_comments', function (done) {
    var testfile = 'inline_html_comments';
    var fixture = helper.readFile(testfile + '.md');
    var actual = marked(fixture);

    helper.writeActual('extras', testfile, actual);
    var expected = helper.readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('inline_html_simple', function () {
  it('should convert inline_html_simple', function (done) {
    var testfile = 'inline_html_simple';
    var fixture = helper.readFile(testfile + '.md');
    var actual = marked(fixture);

    helper.writeActual('extras', testfile, actual);
    var expected = helper.readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

