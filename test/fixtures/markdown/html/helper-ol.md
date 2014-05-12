## \{{ol}}

> Same as the `ul` helper but creates and ordered list. Returns `<br>` tags based on a count.

Parameters: `Hash`, `HTML attributes`, `Optional`

HTML attributes to use on the `ol` element.

Data:

```js
var collection = [
  name: 'Leela'
  deliveries: 8021,
  name: 'Bender'
  deliveries: 239,
  name: 'Fry'
  deliveries: 1
];
```

Template:

```handlebars
\{{#ol collection class="deliveries-list"}}
  \{{name}} - \{{inflect deliveries "delivery" "deliveries" true}}
\{{/ol}}
```

Output:

```html
<ol class="deliveries-list">
  <li> Leela - 8021 deliveries </li>
  <li> Bender - 239 deliveries </li>
  <li> Fry - 1 delivery </li>
</ol>
```
