# Typography

Typography is a wrapper component used to control the styles and
general structure of headers, paragraphs and texts.

## Variant

```html

<Typography variant={"h1"}>
 h1 Hello there
</Typography>

```
Variant prop decides the component style to be rendered. If there is
no component prop then variant prop also decided the component type.

Some variant types are:

```html
"h1", "h2", "h3", "h4", "h5", "h6",
"header", small, "subtitle1", "subtitle2", "body1", "body2"
```

## Component

```html

<Typography variant={"h1"} component={"h2"}>
 h1 Hello there
</Typography>

```

The component prop decides the component type. If component prop
is used with variant prop, the component is rendered with component
prop type but its styles is the one declared in variant prop.

#### Additional content
You can use a custom class.

```html
<Typography variant={"body"} className="someClassName">
 h1 Hello there
</Typography>
```
