// The fallback template to use for headings/anchors,
// if one isn't specified by the user
module.exports = [
  '<h<%= level %>>',
  '  <a name="<%= name %>" class="anchor" href="#<%= name %>">',
  '    <span class="header-link"></span>',
  '  </a><%= text %>',
  '</h<%= level %>>'
].join('\n');