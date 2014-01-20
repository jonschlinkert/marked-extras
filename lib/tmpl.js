// The fallback template to use for headings/anchors,
// if one isn't specified by the user
module.exports = [
  '<h<%= level %>>',
  '  <a name="<%= _.slugify(text) %>" class="anchor" href="#<%= _.slugify(text) %>">',
  '    <span class="header-link"></span>',
  '  </a><%= text %>',
  '</h<%= level %>>'
].join('\n');