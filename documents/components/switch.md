# Switch

Switch control component allow a user to check an option or not. These components must be used with different value prop as they work as normal HTML checkbox tag.
This component can be used as a radio or a checkbox.

## Type

The default switch type is checkbox.

```html
<Switch name={"someName"} value={"someValue"} />
```

To use switch as a radio component:

```html
<Switch type="radio" name={"someName"} value={"someValue"} />
```

## Label
It is possible to add label next to the switch by giving label property

```html
<Switch name={"gender"} value={"female"} label={"Female"} >
```

## Error
Adding error prop to switch element changes the component's style to indicate an error has happened.

```
<Switch name={"gender"} value={"error"} label={"Error"} error />
```

#### Additional content
And of course you can use any other HTML checkbox or radio properties:
```
<Switch id="1" disabled name={"vehicle1"} value={"Bike"} label={"I have a bike"}/>
```
