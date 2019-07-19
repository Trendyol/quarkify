# Checkbox

Checkbox control component allow a user to check an option or not. These components must be used with different value prop as they work as normal HTML checkbox tag.

## Label
It is possible to add label next to the checkbox by giving label property

```
<CheckBox name={"vehicle1"} value={"Bike"} label={"I have a bike"}/>
```

<iframe src="https://codesandbox.io/embed/elated-wood-7si3c?fontsize=14" title="elated-wood-7si3c" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## Error
Adding error prop to checkbox element changes the component's style to indicate an error has happened.

```
<CheckBox error name={"vehicle1"} value={"Bike"} label={"I have a bike"}/>
```

<iframe src="https://codesandbox.io/embed/distracted-johnson-i601e?fontsize=14" title="distracted-johnson-i601e" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

#### Additional content
And of course you can use any other HTML checkbox properties:
```
<CheckBox id="1" disabled name={"vehicle1"} value={"Bike"} label={"I have a bike"}/>
```

<iframe src="https://codesandbox.io/embed/loving-beaver-8ok6f?fontsize=14" title="loving-beaver-8ok6f" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
