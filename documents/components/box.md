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
<Box textAlign="right">
  <span>Right aligned spaced Box</span>
</Box>
<Box textAlign="center">
  <span>Center aligned spaced Box</span>
</Box>
<Box textAlign="justify">
  <span>Justify spaced Box Justify spaced Box Justify spaced Box</span>
</Box>
```

## Fitted

The fitted prop sets the padding of the box to 0.

```html
<Box fitted>
  <span>Fitted box</span>
</Box>
```

# Box Group

Box Group component is a wrapper component for multiple box components.

```html
<BoxGroup>
 <Box>
   <span>Box</span>
 </Box>
 <Box>
   <span>Box</span>
 </Box>
 <Box>
   <span>Box</span>
 </Box>
</BoxGroup>
```
