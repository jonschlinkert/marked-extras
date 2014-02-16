/**
 * The default template to use for headings/anchors.
 * This can be overridden by passing a custom
 * template in the options
 */

module.exports = [
  '<h<%= level %>>',
  '  <a name="<%= name %>" class="anchor" href="#<%= name %>">',
  '    <span class="header-link"></span>',
  '  </a><%= text %>',
  '</h<%= level %>>'
].join('\n');