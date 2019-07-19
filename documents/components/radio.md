# Radio

## Label
It is also possible to add label next to the radio by giving label property

```
<Radio name={"gender"} value={"female"} label={"Female"} />
<br/>
<br/>
<Radio name={"gender"} value={"male"} label={"Male"} />
```

<iframe src="https://codesandbox.io/embed/suspicious-proskuriakova-8lk1e?fontsize=14" title="suspicious-proskuriakova-8lk1e" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## Error
Adding error prop to radio element changes the component's style to indicate an error has happened.

```
<Radio error name={"vehicle1"} value={"Bike"} label={"I have a bike"}/>
```

<iframe src="https://codesandbox.io/embed/naughty-browser-bbd96?fontsize=14" title="naughty-browser-bbd96" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

#### Additional content
You can use any other HTML radio properties:
```
<Radio id="1" disabled name={"vehicle1"} value={"Bike"} label={"I have a bike"}/>
```
