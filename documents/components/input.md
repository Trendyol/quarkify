# Inputs
Custom input styles in numerous elements can be found here.

```
<Input />
```

<iframe src="https://codesandbox.io/embed/summer-glade-6sfle?fontsize=14" title="summer-glade-6sfle" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## Label
It is possible to add label next to the input by giving label property

```
<Input label="My Label"/>
``` 

<iframe src="https://codesandbox.io/embed/busy-snowflake-l5s0o?fontsize=14" title="busy-snowflake-l5s0o" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## Sub Text
Sub texts are less attractive than labels but gives enough information about the content.
```
<Input label="Email" subtext="Your email has to be at least 8 characters"/>
``` 

<iframe src="https://codesandbox.io/embed/epic-herschel-b238r?fontsize=14" title="epic-herschel-b238r" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## Fluid
Adding fluid prop to input element makes the component spread into the div's width.

```
<Input label="Email" subtext="Your email has to be at least 8 characters" fluid/>
```

<iframe src="https://codesandbox.io/embed/musing-lewin-b16kh?fontsize=14" title="musing-lewin-b16kh" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## Error
When the user types something wrong in the input field, you can always show him/her the error message.

```
<Input label={"Text with label"} subtext={"Say something here"} error errorMessage={"Error message comes here"} />
```

<iframe src="https://codesandbox.io/embed/lively-wood-u0r7n?fontsize=14" title="lively-wood-u0r7n" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

#### Additional content
And of course you can use any other HTML input properties:
```
<Input placeholder="Some Placeholder"/>
<Input value={"Bike"}/>
<Input label={"I have a bike"}/>
<Input id="1" disabled />
<Input name={"vehicle1"} />
```
