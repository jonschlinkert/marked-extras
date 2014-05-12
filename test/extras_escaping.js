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
 * escaping
 */

describe('backslash_escapes', function () {
  it('should convert backslash_escapes', function (done) {
    var testfile = 'backslash_escapes';
    var fixture = helper.readFile(testfile + '.md');
    var actual = marked(fixture);

    helper.writeActual('extras', testfile, actual);
    var expected = helper.readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when an angle bracket is escaped', function () {
  it('it should be preserved in the rendered HTML', function (done) {
    var actual = marked('\\>');
    expect(actual).to.deep.equal('<p>></p>\n');
    done();
  });

  xit('it should be preserved in the rendered HTML', function (done) {
    var actual = marked('\\<\\>');
    expect(actual).to.deep.equal('<p><></p>\n');
    done();
  });
});
