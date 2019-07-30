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
  * "h1"
  * "h2"
  * "h3"
  * "paragraph"
  * "smallParagraph"
  * "body"
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

## Display

Typography can be a inline or a block component based on its display
prop.

```html

<Typography variant={"h1"} display={"inline"}>
 h1 Hello there inline
</Typography>

```

## Color

Typography has different color variants.

  * "primary"
  * "green"
  * "red"
  * "black"
  * "dark-gray"
  * "light-gray"
  * "border-gray"

```html

<Typography variant={"h1"} color={"green"}>
 h1 Hello there green
</Typography>

```

#### Additional content
You can use a custom class.

```html
<Typography variant={"h1"} className="someClassName">
 h1 Hello there
</Typography>
```
