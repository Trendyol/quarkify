# Box

Box is a wrapper component used to display elements in a set style.

```html
<Box>
 {children}
</Box>
```

## Spaced

The spaced prop adds a margin to the box component.

```html
<Box spaced>
 <span>Spaced Box</span>
</Box>
```

## Text Align

The textAlign prop, like the name suggest, makes box component's children
aligned according to the value. The default value is left.

```html
<Box spaced textAlign="right">
  <span>Right aligned spaced Box</span>
</Box>
<Box spaced textAlign="center">
  <span>Center aligned spaced Box</span>
</Box>
<Box spaced textAlign="justify">
  <span>Justify spaced Box Justify spaced Box Justify spaced Box</span>
</Box>
```
