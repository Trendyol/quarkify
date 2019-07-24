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

<iframe src="https://codesandbox.io/embed/elated-heisenberg-8k8f4?fontsize=14" title="elated-heisenberg-8k8f4" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## Fluid
Adding fluid prop to button element makes the component spread into the div's width.

```
<Button fluid>Fluid</Button>
```

<iframe src="https://codesandbox.io/embed/eager-murdock-c1kmy?fontsize=14" title="eager-murdock-c1kmy" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## Round
Adding round prop to button creates a button with rounded borders

```
<Button round>Round</Button>
```

<iframe src="https://codesandbox.io/embed/bold-fog-l1pyr?fontsize=14" title="bold-fog-l1pyr" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## Circular
Adding circular prop to button creates a circular button

```
<Button circular>A</Button>
<Button circular icon="heart"></Button>
```

<iframe src="https://codesandbox.io/embed/nice-neumann-hp88k?fontsize=14" title="nice-neumann-hp88k" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## Icon
Adding icon prop to button creates a button with an icon

```
<Button icon="heart" />
<Button variant="secondary" icon="heart">Heart</Button>
```

##Loading
Adding loading prop to button hides the buttons content and
shows a loading icon.

```html
<Button loading>This text will be hidden</Button>
```

<iframe src="https://codesandbox.io/embed/lingering-wave-sfo2b?fontsize=14" title="lingering-wave-sfo2b" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

#### Additional content
You can use any other HTML button element's props.
```
<Button disabled>Disabled</Button>
<Button onClick={someFunction}>Click Event</Button>
```

<iframe src="https://codesandbox.io/embed/awesome-bush-w1jv7?fontsize=14" title="awesome-bush-w1jv7" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
