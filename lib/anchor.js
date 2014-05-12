/**
 * The default template to use for headings/anchors.
 * This can be overridden by passing a custom
 * template in the options
 */

module.exports = function(text, level, id) {
  return [
    '<h'+level+'>',
    '  <a name="'+id+'" class="anchor" href="#'+id+'">',
    '    <span class="header-link"></span>',
    '  </a>'+text,
    '</h'+level+'>'
  ].join('\n');
};