## \{{contains}}

> Searches a string for the given value, and conditionally renders one block of content or another based on the result.

Parameters: `String` (the value to test against)
Default: `undefined`

Data:

```yaml
---
truth: Assemble is the best static site generator for node.js!
---
```

Template:

```handlebars
\{{#contains truth "best"}}
    Absolutely true.
\{{else}}
    This is a lie.
\{{/contains}}
```

Renders to:

```
Absolutely true.
```

