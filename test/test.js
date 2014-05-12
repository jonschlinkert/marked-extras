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

var h1 = function(text, lvl, id) {
  return '<level'+lvl+' id="'+id+'">'+text+'</level'+lvl+'>'
};


var readFile = function(filepath) {
  var src = path.join(__dirname, 'fixtures', filepath);
  return file.readFileSync(src);
};


describe('marked-extras', function () {
  describe('when a string is passed', function () {
    it('should be parsed as markdown and return HTML', function (done) {
      var fixture = 'foo';
      var actual = marked(fixture);
      expect(actual).to.deep.equal('<p>foo</p>\n');
      done();
    });
  });

  describe('when a heading is passed', function () {
    it('should return HTML with standard ', function (done) {
      var fixture = '**foo**';
      var actual = marked(fixture);
      expect(actual).to.deep.equal('<p><strong>foo</strong></p>\n');
      done();
    });
  });

  describe('when a custom heading is passed', function () {
    it('should return customized HTML', function (done) {
      var fixture = '# One (Two) | Three';
      var actual = marked(fixture, {heading: h1});
      expect(actual).to.deep.equal('<level1 id="one-two-three">One (Two) | Three</level1>');
      done();
    });
  });

  describe('when code is passed with an explicitly defined language', function () {
    it('should return customized HTML', function (done) {
      var fixture = '```css\n.foo {color: red;}```';
      var actual = marked(fixture);
      expect(actual).to.deep.equal('.foo {color: red;}');
      done();
    });
  });

  describe('when code is passed with an explicitly defined language', function () {
    it('should return customized HTML', function (done) {
      var highlight = function (code) {
        return require('highlight.js').highlightAuto(code).value;
      };

      var fixture = '```css\n.foo {color: red;}```';
      var actual = marked(fixture, {highlight: highlight});
      expect(actual).to.deep.equal('.foo {color: red;}');
      done();
    });
  });

  describe('when code is passed with an explicitly defined custom language', function () {
    it('should return customized HTML', function (done) {
      var fixture = '```less\n.foo {color: red;}```';
      var actual = marked(fixture);
      expect(actual).to.deep.equal('.foo {color: red;}');
      done();
    });
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'amps_and_angles_encoding';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'auto_links';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'autolink_lines';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'backslash_escapes';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'blockquote_list_item';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'blockquotes_with_code_blocks';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'case_insensitive_refs';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'code_blocks';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'code_spans';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'def_blocks';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'double_link';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'escaped_angles';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'gfm_break.breaks';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'gfm_code';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'gfm_code_hr_list';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'gfm_del';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'gfm_em';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'gfm_links';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'gfm_tables';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'hard_wrapped_paragraphs_with_list_like_lines.nogfm';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'horizontal_rules';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'hr_list_break';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'inline_html_advanced';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'inline_html_comments';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'inline_html_simple';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'lazy_blockquotes';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'links_inline_style';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'links_reference_style';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'links_shortcut_references';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'list_item_text';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'literal_quotes_in_titles';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'loose_lists';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'main';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'markdown_documentation_basics';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'markdown_documentation_syntax';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'nested_blockquotes';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'nested_code';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'nested_em';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'nested_square_link';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'not_a_link';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'ordered_and_unordered_lists';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'ref_paren';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'same_bullet';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'strong_and_em_together';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'tabs';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'text.smartypants';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'tidyness';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'toplevel_paragraphs.gfm';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});

describe('when a heading is passed', function () {
  it('should return HTML with standard ', function (done) {
    var testfile = 'tricky_list';
    var fixture = readFile(testfile + '.md');
    var actual = marked(fixture);
    file.writeFileSync('test/actual/' + testfile + '.html', actual);
    var expected = readFile(testfile + '.html');
    expect(actual).to.deep.equal(expected);
    done();
  });
});
