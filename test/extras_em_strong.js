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
 * emphasis
 */


describe('nested_em', function () {
  it('should convert nested_em', function (done) {
    var testfile = 'nested_em';
    var fixture = helper.readFile(testfile + '.md');
    var actual = marked(fixture);

    helper.writeActual('extras', testfile, actual);
    var expected = helper.readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('strong_and_em_together', function () {
  it('should convert strong_and_em_together', function (done) {
    var testfile = 'strong_and_em_together';
    var fixture = helper.readFile(testfile + '.md');
    var actual = marked(fixture);

    helper.writeActual('extras', testfile, actual);
    var expected = helper.readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});