## \{{lt}}

> Conditionally render a block if the value is less than a given number. Opposite of `gt`.

Parameters: value `string|int` - the value to test against.

Data:

```js
number = 5
```

Template:

```handlebars
\{{#lt number 3}}
    Kiss my shiny metal ass!
\{{else}}
    Never mind :(
\{{/lt}}
```
Renders to:

```
Never mind :(
```
