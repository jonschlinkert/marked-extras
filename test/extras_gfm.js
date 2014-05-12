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
 * GitHub flavored markdown
 */


describe('gfm_break', function () {
  it('should convert gfm_break', function (done) {
    var testfile = 'gfm_break.breaks';
    var fixture = helper.readFile(testfile + '.md');
    var actual = marked(fixture);

    helper.writeActual('extras', testfile, actual);
    var expected = helper.readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('gfm_code', function () {
  it('should convert gfm_code', function (done) {
    var testfile = 'gfm_code';
    var fixture = helper.readFile(testfile + '.md');
    var actual = marked(fixture);

    helper.writeActual('extras', testfile, actual);
    var expected = helper.readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('gfm_code_hr_list', function () {
  it('should convert gfm_code_hr_list', function (done) {
    var testfile = 'gfm_code_hr_list';
    var fixture = helper.readFile(testfile + '.md');
    var actual = marked(fixture);

    helper.writeActual('extras', testfile, actual);
    var expected = helper.readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('gfm_del', function () {
  it('should convert gfm_del', function (done) {
    var testfile = 'gfm_del';
    var fixture = helper.readFile(testfile + '.md');
    var actual = marked(fixture);

    helper.writeActual('extras', testfile, actual);
    var expected = helper.readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('gfm_em', function () {
  it('should convert gfm_em', function (done) {
    var testfile = 'gfm_em';
    var fixture = helper.readFile(testfile + '.md');
    var actual = marked(fixture);

    helper.writeActual('extras', testfile, actual);
    var expected = helper.readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('gfm_links', function () {
  it('should convert gfm_links', function (done) {
    var testfile = 'gfm_links';
    var fixture = helper.readFile(testfile + '.md');
    var actual = marked(fixture);

    helper.writeActual('extras', testfile, actual);
    var expected = helper.readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('gfm_tables', function () {
  it('should convert gfm_tables', function (done) {
    var testfile = 'gfm_tables';
    var fixture = helper.readFile(testfile + '.md');
    var actual = marked(fixture);

    helper.writeActual('extras', testfile, actual);
    var expected = helper.readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});
