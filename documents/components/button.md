# Buttons
Custom button styles in numerous elements can be found here. Use any of the available button style types to quickly create a styled button. 

## Variant
You can change the variant prop to give some predefined styles to the button component. For now, there are only 4 type of variants which are:
- primary
- secondary
- gray

```
<Button variant='primary'>Primary</Button>
<Button variant='secondary'>Secondary</Button>
<Button variant='gray'>Gray</Button>
``` 

## Fluid
Adding fluid prop to button element makes the component spread into the div's width.

```
<Button variant='secondary' fluid>Secondary</Button>
```

## Round
Adding round prop to button creates a button with rounded borders

```
<Button round>Secondary</Button>
```

## Circular
Adding circular prop to button creates a circular button

```
<Button circular>Secondary</Button>
```

#### Additional content
You can use any other HTML button element's props.
```
<Button disabled>Disabled</Button>
<Button onClick="alert('hey')">Click Event</Button>
```
