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
 * lists
 */


describe('loose_lists', function () {
  it('should convert loose_lists', function (done) {
    var testfile = 'loose_lists';
    var fixture = helper.readFile(testfile + '.md');
    var actual = marked(fixture);

    helper.writeActual('extras', testfile, actual);
    var expected = helper.readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('hard_wrapped_paragraphs_with_list_like_lines', function () {
  it('should convert hard_wrapped_paragraphs_with_list_like_lines', function (done) {
    var testfile = 'hard_wrapped_paragraphs_with_list_like_lines.nogfm';
    var fixture = helper.readFile(testfile + '.md');
    var actual = marked(fixture);

    helper.writeActual('extras', testfile, actual);
    var expected = helper.readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});


describe('list_item_text', function () {
  it('should convert list_item_text', function (done) {
    var testfile = 'list_item_text';
    var fixture = helper.readFile(testfile + '.md');
    var actual = marked(fixture);

    helper.writeActual('extras', testfile, actual);
    var expected = helper.readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('ordered_and_unordered_lists', function () {
  it('should convert ordered_and_unordered_lists', function (done) {
    var testfile = 'ordered_and_unordered_lists';
    var fixture = helper.readFile(testfile + '.md');
    var actual = marked(fixture);

    helper.writeActual('extras', testfile, actual);
    var expected = helper.readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});


describe('tricky_list', function () {
  it('should convert tricky_list', function (done) {
    var testfile = 'tricky_list';
    var fixture = helper.readFile(testfile + '.md');
    var actual = marked(fixture);

    helper.writeActual('extras', testfile, actual);
    var expected = helper.readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});


describe('same_bullet', function () {
  it('should convert same_bullet', function (done) {
    var testfile = 'same_bullet';
    var fixture = helper.readFile(testfile + '.md');
    var actual = marked(fixture);

    helper.writeActual('extras', testfile, actual);
    var expected = helper.readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});
